const express = require('express');
const server = express();

server.set('view engine','ejs');
server.get('/', (req, res) => {
    res.send('hello');
});
server.get("/login",(req,res)=>{
    res.send('Login')
})
server.listen(5000, () => {
    console.log('Server Started...');
});