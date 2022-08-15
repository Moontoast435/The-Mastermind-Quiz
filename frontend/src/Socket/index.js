
import io from "socket.io-client";
const serverEndpoint = "https://.herokuapp.com/"; //add heroku link here
const socket = io(serverEndpoint);

export { socket };