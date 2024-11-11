// Mongo
require('./MongoConnection');
// MongoSchema
const UserModel = require('./schemas/usersSchema');
// Express
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('App is working');
});

app.get('/users', async (req, res) => {
    try {
        let result = await UserModel.find({});
        res.send(result);
    } catch (e) {
        console.log('ERROR ---> ' + e);
    }
});

app.listen(5000);