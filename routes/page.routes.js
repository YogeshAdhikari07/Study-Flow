const express = require('express');
const page = express.Router();
const auth = require('../middleware/auth');
const userModel = require('../models/user');
const taskModel = require('../models/task');
page.get('/leaderboard', (req, res) => {
    res.render('leaderboard');
});
page.get('/logsign', (req, res) => {
    res.render('logsign');
});
page.get('/login', (req, res) => {
    res.render('login');
});
page.get('/signup', (req, res) => {
    res.render('signup');
});
page.get('/home', auth, async (req, res) => {
    const user = await userModel.findOne({ _id: req.user.id });
    const task = await taskModel.find({
        userId: req.user.id
    }).limit(3);
    const taskStatData = await taskModel.find({ userId: req.user.id });
    let holding = 0, pending = 0, complete = 0 , working = 0;
    taskStatData.forEach((t) => {
        if (t['status'] === 'hold') {
            ++holding;
        } else if (t['status'] === 'pending') {
            ++pending;
        } else if (t['status'] === 'complete') {
            ++complete;
        }
        else if(t['status'] === 'working') {
            ++working;
        }
    });
    taskStatus=
    {
        total:taskStatData.length,
        holding:holding,
        pending:pending,
        complete:complete,
        working:working
    }
    return res.render('home', {
        user: user,
        tasks: task,
        taskStatus: taskStatus
    });
});
page.get('/task', auth, async (req, res) => {
    const tasks = await taskModel.find({
        userId: req.user['id']
    });
    res.render('task', { tasks: tasks })
})
page.get('/task/:id', async (req, res) => {
    const taskData = await taskModel.findOne({
        _id: req.params.id
    });
    return res.render('taskpreview', { taskData: taskData })
});
page.get('/tasks/stats', auth, async (req, res) => {
    const { status } = req.query;
    let filter = {
        userId: req.user.id,
        status: status
    };

    const tasks = await taskModel.find(filter);

    res.render('task', { tasks });
});
page.get('/logout',(req,res)=>{
    res.clearCookie("token");
    return res.redirect("/");
})
page.get('/studyground',auth,(req,res)=>
    {
        return res.render('studyground');
    })
module.exports = page;