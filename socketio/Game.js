<<<<<<< HEAD
// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

=======
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
class Games {
    constructor() {

        this.games = []; 
        this.players = [];
    }

<<<<<<< HEAD
    addGame (hostID, roomName, difficulty, count, subject) {
                let game = {
                    host: hostID,
                    room: roomName,
                    difficulty: difficulty,
                    count: count,
                    subject: subject,
                    players: [],
                    active: false
                }
        
                // let game = new Game(hostID, roomName, difficulty, count, subject);
                this.games.push(game);
   
                this.games.forEach(room => console.log(room))
                return game;
=======
    addGame(hostID, roomName, difficulty, count, subject) {
        let game = {
            host: hostID,
            room: roomName,
            difficulty: difficulty,
            count: count,
            subject: subject,
            players: [],
            active: false,
        };

        this.games.push(game);

        this.games.forEach((room) => console.log(room));
        return game;
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
    }
        
    addPlayer (username, room, hostID) {
        let player = {
<<<<<<< HEAD
            username: username, 
            roomName: room, 
            roomID: hostID,
            score: 0
        }

        this.players.push(player);
        let game = this.games.find( y => y.room == room);
        try{
=======
            username: username,
            roomName: room,
            roomID: hostID,
            score: 0,
        };

        this.players.push(player);
        let game = this.games.find((y) => y.room == room);
        try {
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
            game.players.push(player);
            console.log(game.players)
            return player;
<<<<<<< HEAD
        }  catch (err) {
            console.log("add player has : " + err)
            return { err: err }   
=======
        } catch (err) {
            console.log("add player has : " + err);
            return { err: err };
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
        }
    }

    getPlayersForGame(roomName) {
<<<<<<< HEAD

        //get all players
        const game = this.games.filter(game => game.room === roomName);
        console.log(game.players)
    }


    filterRoom (roomName) {
        return this.games.room === roomName; 
    }

    // getPlayerCount = (roomName) => {
    //     console.log("check player count")
    //     const game =  this.games.filter(game => game.room === roomName);
    //     console.log(game)
    //     console.log(game.getPlayerCount)
    //     // console.log(game.players.length); 
    //     return game.players.length; 
    // }

    //check the room id
    //get players with room id
    getPlayerData (roomName) {
        //find room in games
        // console.log("player data")
        // const game =  this.games.filter(game => game.room === roomName);
        let game = this.games.find( y => y.room == roomName);
        // const players = this.players.filter(player => player.room === roomName)
        if(game === undefined ){
            return "error"
=======
        const game = this.games.filter((game) => game.room === roomName);
        console.log(game.players);
    }

    filterRoom(roomName) {
        return this.games.room === roomName;
    }

    getPlayerData(roomName) {
        let game = this.games.find((y) => y.room == roomName);

        if (game === undefined) {
            return "error";
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
        }
        return game.players;
    }

<<<<<<< HEAD
    addScore(room, username, score){
        //find the game
        let game = this.games.find( y => y.room == room);
        //in the room find the player usernmae
        console.log(game, 'addscore gameroom')
        console.log(username, 'addscore username')
        try{
            let player = game.players.find(p => p.username === username)
            //and add the score
            player.score = score; 
            //return all player scores for the gamae getPlayerData()
            return game.players
=======
    addScore(room, username, score) {
        let game = this.games.find((y) => y.room == room);

        console.log(game, "addscore gameroom");
        console.log(username, "addscore username");
        try {
            let player = game.players.find((p) => p.username === username);

            player.score = score;

            return game.players;
        } catch (err) {
            console.log("add score error: " + err);
            return { err: err };
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
        }
        catch (err) {
            console.log("add score error: " + err)
            return { err: err }   
        }
    }
  
    getGame (roomName){
        let game = this.games.find( y => y.room == roomName);
        return game;

    }

<<<<<<< HEAD
    canRoomBeJoined(roomName){
            console.log("Looking for room")
                const game =  this.games.filter(game => {console.log(game.room === roomName); return game.room === roomName});
                if (game.length > 0){
                    return game;
                } else {
                    return 'ERROR'
                }
    }
    getGameByRoom(roomName) {
        this.games.forEach(game => console.log(game))
        const game =  this.games.filter(game => {console.log(game.room === roomName); return game.room === roomName});
        return game;
    };

    checkRoomName(room) {
        let game = this.getGameByRoom(room);
        if(game.length > 0 ) {
=======
    getGame(roomName) {
        let game = this.games.find((y) => y.room == roomName);
        return game;
    }

    canRoomBeJoined(roomName) {
        console.log("Looking for room");
        const game = this.games.filter((game) => {
            console.log(game.room === roomName);
            return game.room === roomName;
        });
        if (game.length > 0) {
            return game;
        } else {
            return "ERROR";
        }
    }
    getGameByRoom(roomName) {
        this.games.forEach((game) => console.log(game));
        const game = this.games.filter((game) => {
            console.log(game.room === roomName);
            return game.room === roomName;
        });
        return game;
    }

    checkRoomName(room) {
        let game = this.getGameByRoom(room);
        if (game.length > 0) {
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
            return false;
        } else {
            return true;
        };
    };
}

<<<<<<< HEAD
module.exports = {Games};
=======
module.exports = { Games };
>>>>>>> e6fcf89dc7245570599093d570b5823e02296c3e
