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
    const room = useSelector((state) => state.room);
    console.log(room);
    const host = useSelector((state) => state.user.type);
    console.log(host);

    socket.on("new player", (user) => {
        setNewPlayer(user);
    });

<<<<<<< HEAD
  // Client emits room to server and receives list of users
  // Sets player array
    useEffect(() => {  
        socket.emit('game-players', room, (res) => {
          console.log(res,'hello')
            const usernames = res.map(resp => resp.username)
            
            setPlayers(usernames)
            console.log('hello')
        })
    }, [newPlayer]);
=======
    useEffect(() => {
        socket.emit("game-players", room, (res) => {
            console.log(res);
            console.log(room);
            const usernames = res.map((resp) => resp.username);
            setPlayers(usernames);
            console.log("hello");
        });
    }, [newPlayer, room]);
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e

    console.log("hello");

    return (
        <div id="Lobby">
            <h2>Waiting Room</h2>

            <LobbyStatus host={host} />
            <div id="players">
                {players.map((player, i) => (
                    <Players key={i} player={player} />
                ))}
            </div>
        </div>
    );
};

export default WaitingRoom;
