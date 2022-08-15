
import io from "socket.io-client";
const serverEndpoint = "https://.herokuapp.com/"; //heroku link
const socket = io(serverEndpoint);

export { socket };