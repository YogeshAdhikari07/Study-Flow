const express = require('express');
const page = express.Router();
page.get('/leaderboard',(req,res)=>{
    res.render('leaderboard');
});
module.exports = page;