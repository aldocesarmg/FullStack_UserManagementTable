// Mongoose connection to DB
require('../mongo/MongoConnection');
// Express
const express = require('express');
const cors = require('cors');
// Router
const UserManagementTableRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(UserManagementTableRouter);

module.exports = app;