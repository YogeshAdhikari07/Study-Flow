const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    displayname:{
        type:String,
        reuired:true,
        unique:true
    },
    email:{
        type:String,
        reuired:true
    },
    password:
    {
        type:String,
        required:true
    }
});
const userModule = mongoose.model('user',userSchema);
module.exports = userModule;