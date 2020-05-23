const http = require('http');
const app = require('./app');
// const express = require('express')
// const app = express();
const port = process.env.PORT || 5000;

const server = http.createServer(app);


server.listen(port, () => {
    console.log(`server running ${port}`)
});