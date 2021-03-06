
// File Name : admin.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Mar 29, 2019

let express = require('express');
let router = express.Router();

let adminController = require('../controllers/admin');

// Get messages list - READ
router.get('/', adminController.displayMessages);

// Adding a messge to the db
router.post('/add', adminController.processMessage);

//delete a message from db
router.get('/delete/:id', adminController.deleteMessage);

module.exports = router;
