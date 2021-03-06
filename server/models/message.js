
// File Name : message.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Mar 29, 2019

let mongoose = require('mongoose');

//create a model class for message
let messageShema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    number: Number,
    message: String
},
{
    collection: "message"
});

module.exports = mongoose.model('portfolio', messageShema);