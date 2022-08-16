const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

app.use(cors());
const server = http.createServer(app);
const { Game } = require("./Game");

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

const game = new Game();

let users = [];

io.on("connection", (socket) => {
    socket.emit("assign-id", { id: socket.id });
    socket.on("join server", (username) => {
        const user = {
            username,
            id: socket.id,
        };

        users.push(user);
        io.emit("new user", users);
    });

    let participantCount = io.engine.clientsCount;
    io.emit("users", participantCount);

    socket.on("check-room", (roomName, callback) => {
        console.log("CLIENT REQUEST TO CREATE ROOM WITH ", roomName);
        if (game.checkRoomName(roomName)) {
            callback({
                code: "success",
                message: `Success: Created room with name ${roomName}`,
            });
        } else {
            callback({
                code: "ERROR",
                message: `Room name ${roomName} is taken. Please try another name`,
            });
        }
    });

    socket.on("add-config", (config, cb) => {
        game.addGame(config.host, config.room, config.difficulty, config.count, config.subject);
        socket.join(config.host);
        game.addPlayer(config.username, config.room, config.host);

        cb({
            code: "Success",
            message: `SUCCESS: Configuration has been added`,
        });
    });

    socket.on("game-start", (roomName) => {
        console.log(`game started`);
        io.to(roomName).emit("game-start", true);
    });

    socket.on("join room", (config, cb) => {
        console.log(config);

        const foundRoom = game.canRoomBeJoined(config.room);
        console.log("join-room", foundRoom);

        if (foundRoom === "ERROR") {
            console.log("no room found");
            const errMsg = "Room not found";
            io.to(config.id).emit("no room", errMsg);
        } else {
            console.log("adding player");
            game.addPlayer(config.username, config.room, socket.id);
            socket.join(config.room);
            socket.emit(`${config.username} has joined the room`);
            io.emit("new player", config.username);

            const gameRoom = game.getGameByRoomName(config.room);

            cb({
                code: "success",
                player: config.username,
                score: 0,
            });

            io.to(gameRoom.host).emit("player connected", {
                name: config.username,
                score: 0,
            });
        }
    });

    let roomNameVar;
    socket.on("game-players", (roomName, cb) => {
        const data = game.getPlayers(roomName);
        roomNameVar = roomName;
        io.in(roomName).emit(data);

        cb(data);
    });

    io.to(roomNameVar).emit("game-players");

    socket.on("game-start", (roomName) => {
        console.log("game started");
        io.to(roomName).emit("game-start", true);
    });

    socket.on("get-questions", (roomName, cb) => {
        const data = game.getGame(roomName);
        cb(data);
    });

    socket.on("score", (config, cb) => {
        console.log("SCORE TALLY");
        //get data
        let scores = game.addScore(config.room, config.username, config.score);
        io.to(config.room).emit("score", scores);
        cb({
            code: "success",
            scores: scores,
        });
    });

    //On disconnect, count new number of clients and update participantCount
    socket.on("disconnect", () => {
        users = users.filter((u) => u.id !== socket.id);
        io.emit("new user", users);
        //makes io count the number of clients again
        participantCount = io.engine.clientsCount;
        io.emit("users", participantCount);
    });
});

module.exports = server;
