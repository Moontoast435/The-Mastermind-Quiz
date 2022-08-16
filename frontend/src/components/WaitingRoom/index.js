import { useState, useEffect } from "react";
import React from "react";
import { Players, LobbyStatus } from "../../components";
import { useSelector } from "react-redux";
import { socket } from "../../Socket/index";

const WaitingRoom = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState("");
    const username = useSelector((state) => state.user.username);
    console.log(username);
    const room = useSelector((state) => state.user.room);
    const host = useSelector((state) => state.user.type);

    // Server emits 'new peon' when new player join
    // Sets new player with username of new user
    socket.on("new player", (user) => {
        setNewPlayer(user);
    });

    //Client emits room to server and receives list of users
    //Sets player array
    useEffect(() => {
        socket.emit("game-players", room, (res) => {
            const usernames = res.map((resp) => resp.username);
            setPlayers(usernames);
            console.log("hello");
        });
    }, [newPlayer, room]);

    console.log("hello");

    return (
        <div role="lobby" id="Lobby">
            <h2>Waiting Room</h2>

            <LobbyStatus host={host} />
            <div id="players">
                {players.map((player) => (
                    <Players key={players.indexOf(player)} player={player} />
                ))}
            </div>
        </div>
    );
};

export default WaitingRoom;
