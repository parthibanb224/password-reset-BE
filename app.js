const express = require('express');
const APP_SERVER = express();

APP_SERVER.get('/',(req,res,next) => {
    res.send('<h1>PASSWORD RESET TASK</h1>')
});
APP_SERVER.use('/signup',require('./controllers/SignUp.controller'));
APP_SERVER.use('/users', require('./controllers/users.controller'));
APP_SERVER.use('/login', require('./controllers/Login.controller'));

module.exports = APP_SERVER;