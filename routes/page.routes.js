const express = require('express');
const page = express.Router();
const auth = require('../middleware/auth');
const taskModel = require('../models/task');
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
page.get('/task',auth,async(req,res)=>{
    const tasks = await taskModel.find({
        userId:req.user['id']
    });
    res.render('task',{tasks:tasks})
})
module.exports = page;