const mongoose=require('mongoose');

const newSchema=new mongoose.Schema({
    id:{type:Number},
    todoTitle:{type:String,required:true},
    todoDescription:{type:String},
    isStatusDone:{type:Boolean}
})

const Todos=mongoose.model('Todos',newSchema);

module.exports=Todos;