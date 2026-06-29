const express = require('express');
const api = express.Router();
const userModule = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

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
                expiresIn: '1h'
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        });
        res.status(201).json({
            status: true,
            message: "User Created"
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: false,
            message: "Not able to Create!"
        });
    }
});

module.exports = api;