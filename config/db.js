const mongoose = require('mongoose');
async function connector(){
    try{
        const connection = mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('Connected!');});
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connector;