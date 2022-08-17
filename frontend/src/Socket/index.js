
import io from "socket.io-client";
const serverEndpoint = "http://localhost:5001"; //add heroku link here
const socket = io(serverEndpoint);

export { socket };