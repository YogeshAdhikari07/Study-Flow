const express = require('express');
const page = express.Router();
const auth = require('../middleware/auth');
page.get('/leaderboard',(req,res)=>{
    res.render('leaderboard');
});
page.get('/logsign',(req,res)=>{
    res.render('logsign');
});
page.get('/login',(req,res)=>{
    res.render('login');
});
page.get('/signup',(req,res)=>{
    res.render('signup');
});
page.get('/home',auth,(req,res)=>{
    res.render('home');
});
page.get('/task',auth,(req,res)=>{
    res.render('task')
})
module.exports = page;