const bcrypt = require('bcrypt');
const local = require('passport-local').Strategy
const connection = require('./database/connection');

module.exports = function(passport){
    function findUser(username) {
        connection('users_flairs')
    }
}