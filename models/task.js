const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        effort:{
            type:String,
            required:true
        }
    }
)
const taskModel = mongoose.model('tasks',taskSchema);
module.exports = taskModel;