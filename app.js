const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(cors());
app.use('/api', controller);

module.exports = app;
