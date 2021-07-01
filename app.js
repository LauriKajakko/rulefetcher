const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('./controller');

const app = express();
app.use(cors());
app.use('/api', controller);
app.use('/static', express.static(path.join(__dirname, './build/static')));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './build') });
});

module.exports = app; 
