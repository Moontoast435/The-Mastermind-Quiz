class Game {
    constructor() {
        this.games = [];
        this.players = [];
    }

    addGame(hostID, roomName, difficulty, count, subject) {
        let game = {
            host: hostID,
            room: roomName,
            difficulty,
            count,
            subject,
            players: [],
            active: false,
        };

        this.games.push(game);
        this.games.forEach((room) => console.log(room));
        return game;
    }

    addPlayer(username, room, hostID) {
        let player = {
            username: username,
            roomName: room,
            roomId: hostID,
            score: 0,
        };

        this.players.push(player);
        let game = this.games.find((game) => game.room === room);
        try {
            game.players.push(player);
            console.log(game.players);
            return player;
        } catch (error) {
            console.log(`Add player: ${error}`);
            return { err: error };
        }
    }

    getGameByRoomName(roomName) {
        const game = this.games.filter((game) => game.room === roomName);
        console.log(game);
        return game;
    }

    getPlayers(roomName) {
        const game = this.games.find((game) => game.room === roomName);
        if (game === undefined) return "Error! No game found";
        return game.players;
    }

    addScore(room, username, score) {
        const game = this.games.find((game) => game.room === room);
        console.log(`ADD SCORE: ${game}`);
        console.log(`ADD SCORE: ${username}`);
        try {
            const player = game.players.find((player) => (player.username = username));
            player.score = score;
            return game.players;
        } catch (error) {
            console.log(`Add score error: ${error}`);
            return { err: error };
        }
    }

    canRoomBeJoined(roomName) {
        console.log("Looking for room");
        const game = this.games.filter((game) => game.room === roomName);
        if (game.length > 0) {
            return game;
        } else {
            return "ERROR";
        }
    }

    checkRoomName(room) {
        let game = this.getGameByRoomName(room);
        if (game.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = { Game };
