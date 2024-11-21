// Import express
const express = require('express');
// Import mongoose models
const UserModel = require('../mongo/schemas/usersSchema');

const UMT_Router = new express.Router();

// Code for routes
UMT_Router.get('/', (req, res) => {
    res.send('App is working');
});

UMT_Router.get('/users', async (req, res) => {
    try {
        let result = await UserModel.find({});
        res.send(result);
    } catch (e) {
        console.log('ERROR ---> ' + e);
    }
});

module.exports = UMT_Router;