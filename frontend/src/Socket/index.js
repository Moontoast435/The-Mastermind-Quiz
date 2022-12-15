
import io from "socket.io-client";
const serverEndpoint = "https://masterminds-quiz.onrender.com/"; //redeployed on render
const socket = io(serverEndpoint);

export { socket };