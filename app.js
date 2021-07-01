const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(cors());
app.use('/api', controller);
app.use(express.static('build'))

module.exports = app; 
