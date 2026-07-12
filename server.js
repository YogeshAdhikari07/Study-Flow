const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const connector = require('./config/db');
connector();
const pageRoutes = require('./routes/page.routes');
const apiRoutes = require('./routes/api.routes');
server.use(cookieParser());
server.set('view engine','ejs');
server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/page',pageRoutes);
server.use('/api',apiRoutes);
server.get('/', (req, res) => {
    res.render('index');
});
server.get('/hello',(req,res)=>{
    return res.status(201).json({
        message:'hello'
    })
})
server.listen(process.env.PORT||5000, () => {
    console.log('Server Started...');
});