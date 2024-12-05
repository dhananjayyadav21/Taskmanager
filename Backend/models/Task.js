const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    Auser:{
      type:String,
      default:null
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
    }
});
TaskSchema.index({ title: 'text', description: 'text' });
module.exports = mongoose.model('task',TaskSchema);

