const express = require('express')
const app = express();
const { scoreRouter } = require('./routes/index.js');
const cors = require('cors');
app.use(cors())
app.use(express.json());


// Root route
app.get('/', (req, res) => res.send("Hello, world! Welcome to the masterminds\' API!"));


//Leaderboard routes
app.use('/scoreboard', scoreRouter)

module.exports = app;