// initialize .env variables
require("dotenv").config();

require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000 + establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create app object
const app = express();

const cors = require("cors")
const morgan = require("morgan")

const peopleRouter = require('./routes/people')

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for dev

app.use('/people', peopleRouter)

// ROUTES
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENERS
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));