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

UMT_Router.post('/addUser', async (req, res) => {
    try {
        const newUser = new UserModel({
            name: req.body.name,
            user_role: req.body.user_role,
            status: req.body.status,
            social_profile: req.body.social_profile,
            promote: req.body.promote,
            rating: req.body.rating,
            last_login: req.body.last_login
        });

        await UserModel.create(newUser);
        res.status(201).json('User added');
    } catch(error) {
        console.error('Error in /addUser POST method');
        res.status(400).json({message: 'Internal server error: ' + error.message})
    }
});

UMT_Router.delete('/deleteUser/:id', async (req, res) => {
    try {
        let found = await UserModel.find({ _id: req.params.id });
        if (found.length > 0) {
            await UserModel.deleteOne({ _id: req.params.id });
            res.status(201).json('Deleted');
        } else {
            res.status(400).json('User not found');
        }
    } catch (error) {
        console.error('Error in /deleteUser DELETE method');
        res.status(400).json({message: 'Internal server error: ' + error.message});
    }
});

module.exports = UMT_Router;