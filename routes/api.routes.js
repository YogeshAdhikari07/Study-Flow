const express = require('express');
const api = express.Router();

api.post('/signup',(req,res)=>{
    const {displayname,email,password} = req.body;
    console.log([displayname,email,password]);
    res.json({
        status:true,
        message:'baka'
    }
    );
});

module.exports = api;