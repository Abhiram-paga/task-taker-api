const Todos= require("../models/todo");

const createTodo= async (req, res) => {
  try {
    const {todoTitle, todoDescription, isStatusDone } = req.body;
    const todo = new Todos({todoTitle, todoDescription, isStatusDone });
    await todo.save();

    res.status(201).json({ message: "Todo created successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

const updateTodo=async (req, res) => {
  try {
    const { id } = req.params;
    const { todoTitle, todoDescription, isStatusDone } = req.body;
    const todo = await Todos.findByIdAndUpdate(id, {
      todoTitle,
      todoDescription,
      isStatusDone,
    },{
      new:true,
      runValidators:true
    });

    if (!todo) {
      res.status(400).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getTodos=async (req,res)=>{
  try{
    const todoList=await Todos.find({});
    res.status(200).json({todos:todoList});

  }catch(err){
    res.status(500).json({error:err.message});
  }
  
}

const deleteTodo=async (req,res)=>{

  try{
      const {id}=req.params;
      const todo=await Todos.deleteOne({_id:id});
      if(!todo){
        res.status(404).json({error:'Todo not found'});
      }
      res.status(200).json({message:'Todo deleted Successfully'});
  }catch(err){
    res.status(500).json({error:err.message});
  }

}

const changeStatus=async (req,res)=>{
  try{
    const {id}=req.params;
    const {isStatusDone}=req.body;
    const todo=await Todos.findByIdAndUpdate(id,{
      isStatusDone
    });
    if(!todo){
      res.status(404).json({error:'Todo not found'});
    }
    res.status(200).json({message:'Status changed'});
  }catch(err){
    res.status(500).json({error:err.message});
  }
}

module.exports={createTodo,updateTodo,getTodos,deleteTodo,changeStatus};