const express = require('express');
const routes = express.Router();

// const cont = require('./controllers/<Controller>');

// routes.get('/rota', cont.index);


routes.get('/login', (req,res) => {
    return res.json({
      MarkSays: 'Delete this!',
    });
  });

module.exports = routes;