
// File Name : admin.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Mar 29, 2019

let express = require('express');
let router = express.Router();

//create reference to messageModel model
let messageModel = require('../models/message');

//getting all messages from database and sending it to admin/index.ejs
let displayMessages = (req,res,next) => {
    messageModel.find((err, messageList) => {
        if(err){
            return console.error(err);
        }else{
            res.json({success: true, msg: 'Contact List Displayed Successfully', messageList: messageList, user: req.user});

        }
    })};


    //Adding a new message 
let processMessage = (req,res,next) => {
    //Creating a new Modle object
    let newMessage = messageModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "number": req.body.number,
        "message": req.body.message
    });

    messageModel.create(newMessage, (err, messageModel)=>{
        console.log(messageModel);
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success: true, msg: 'Successfully Added New Message'});
        }
    });
};


//delete a messsage from the database
let deleteMessage = (req,res,next) => {
    let id = req.params.id;

    messageModel.remove( {_id:id} , (err, contactModel)=>{
        if(err){
            res.end(err);
        }
        else{
            res.json({success: true, msg: 'Successfully Deleted Message'});
        }
    });
};


//export all the methods
module.exports = {
    displayMessages,//getting all the messages
    processMessage, //Processing the add message
    deleteMessage
}