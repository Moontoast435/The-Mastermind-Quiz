
import io from "socket.io-client";
const serverEndpoint = "https://obscure-brushlands-72357.herokuapp.com/"; //add heroku link here
const socket = io(serverEndpoint);

export { socket };