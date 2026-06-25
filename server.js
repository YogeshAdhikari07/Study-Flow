const express = require('express');
const server = express();
const pageRoutes = require('./routes/page.routes');
server.set('view engine','ejs');
server.use(express.static('public'));
server.use('/page',pageRoutes);
server.get('/', (req, res) => {
    res.render('home.ejs');
});
server.get('/login',(req,res)=>{
    res.send('Login')
})
server.listen(5000, () => {
    console.log('Server Started...');
});