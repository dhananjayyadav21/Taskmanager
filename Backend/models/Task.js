const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
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
    deadline:{
        type:Date,
        deadline:new Date
    },
    status:{
        type:String,
        required:true
    },
    assigned:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});

module.exports = mongoose.model('task',TaskSchema);

