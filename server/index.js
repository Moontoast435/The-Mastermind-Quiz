const server = require('./server')
const port = process.env.PORT || 3001;
const init = require("./db/mongoInit.js");

server.listen(port, () => console.log(`Express now departing from port ${port}!`))

