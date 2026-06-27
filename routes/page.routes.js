const express = require('express');
const page = express.Router();
page.get('/leaderboard',(req,res)=>{
    res.render('leaderboard');
});
page.get('/logsign',(req,res)=>{
    res.render('logsign');
})
module.exports = page;