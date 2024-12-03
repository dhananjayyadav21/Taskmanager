const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    priority:{
        type:String,
        default:"low"
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
        default:"To Do"
    },
    deadline:{
        type: Date,
        default: Date.now
    },
    assigned:{
        type:String,
        ref:'users'
    }
});

module.exports = mongoose.model('task',TaskSchema);

