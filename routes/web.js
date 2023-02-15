const express = require('express');
const web = express.Router();

web.get('/', (req, res) => {
    res.render('index', {title:'home'})
});
web.get('/registration', (req, res) => {
    res.render('registration', {title:'Form Registrasi'})
});
web.get('/game', (req, res) => {
    res.render('game', {title:'Play game'})
});
web.get('/dashboard', (req, res) => {
    res.render('dashboard', {title:'dashboard'})
});


module.exports = web;