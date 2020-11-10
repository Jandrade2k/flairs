const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');

routes.get('/teste', Login.teste);
routes.post('/createuser', Login.create);
routes.post('/login', Login.login);


module.exports = routes;