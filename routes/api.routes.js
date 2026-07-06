const express = require('express');
const api = express.Router();
const userModule = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');
const taskModel = require('../models/task');
const { default: mongoose } = require('mongoose');
api.post('/signup', async (req, res) => {
    const { displayname, email, password } = req.body;
    try {
        const encPassword = await bcrypt.hash(password, 10);
        const user = await userModule.create({
            displayname,
            email,
            password: encPassword
        });
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '12h'
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        });
        return res.status(201).json({
            status: true,
            message: "User Created"
        });
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            status: false,
            message: "Not able to Create!"
        });
    }
});
api.post('/login', async (req, res) => {
    const { displayname, password } = req.body;
    try {
        const user = await userModule.findOne({
            displayname: displayname,
        });
        if (!user) {
            return res.status(401).json({
                status: false,
                message: 'Credential must be Incorrect!'
            });
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(401).json({
                status: false,
                message: 'Credential must be Incorrect!'
            });
        }
        const token = jwt.sign({
            id:user._id,
            displayname:user.displayname
        },process.env.JWT_SECRET,{expiresIn:'12h'});
        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        });
        res.status(200).json({
            status:true,
            message:'User Founded!'
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: 'Server Error!'
        })
    }
});
api.post('/createTask',auth,async(req,res)=>{
    const {title,description,priority,effort} = req.body;
    try{
        const task = await taskModel.create({
            userId:req.user.id,
            title:title,
            description:description,
            priority:priority,
            effort:effort,
            status:'pending'
        })
        if(!task){
            return res.status(500).json({
                message:'Can not Create task',
            });
        }
        return res.status(201).json({
            message:'Task Created Successfully!',
            id:task._id
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
                message:'Can not Create task'
            });
    }
});
module.exports = api;