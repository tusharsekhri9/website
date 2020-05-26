const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require("path")
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "./build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname + "/build/index.html"))
})
 const message_routes = require('./routes/message.js');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/message', message_routes);
app.get("/", (req, res) => {
    res.send("Hi there running")
})


module.exports = app;