const express = require('express');
const page = express.Router();
const auth = require('../middleware/auth');
const userModel = require('../models/user');
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
page.get('/home',auth,async(req,res)=>{
    const user = await userModel.findOne({_id:req.user.id});
    const task = await taskModel.find({
        userId:req.user.id
    }).limit(3);
    return res.render('home',{
        user:user,
        tasks:task
    });
});
page.get('/task',auth,async(req,res)=>{
    const tasks = await taskModel.find({
        userId:req.user['id']
    });
    res.render('task',{tasks:tasks})
})
page.get('/task/:id',async (req,res)=>{
    const taskData = await taskModel.findOne({
        _id:req.params.id
    });
    return res.render('taskpreview',{taskData:taskData})
})
module.exports = page;