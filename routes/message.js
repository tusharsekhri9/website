const express = require('express');
const router = express.Router();
const Message = require('../models/message.js');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

router.get("/", (req, res) => {
    res.send("here you are")
})

router.post("/",(req,res,next) => {
    console.log("req received", req);
    console.log("name ", req.body.name);
    console.log("email ", req.body.email);
    console.log("content ", req.body.content);

    const new_message =  new Message({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         email: req.body.email,
         content: req.body.content
     });
     new_message.save().then(result => {
         res.status(200).json({
             result: Succeeded
         });
     })
     .catch(err => {
         res.status(500).json({
             result: 'Error'
         });
     });
 });

module.exports = router;