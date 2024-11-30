const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    priority:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        required:true
    },
    deadline:{
        type:Date,
        deadline:new Date
    },
    assigned:{
        type:String,
        ref:'user'
    }
});

module.exports = mongoose.model('task',TaskSchema);

