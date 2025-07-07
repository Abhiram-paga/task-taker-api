const express = require("express");
const { changeStatus, createTodo, deleteTodo, updateTodo ,getTodos}=require("../controllers/todoController");

const todoRouter=express.Router();  

todoRouter.post("/",createTodo);

todoRouter.put("/:id",updateTodo);

todoRouter.get('',getTodos);

todoRouter.delete('/:id',deleteTodo);

todoRouter.patch('/:id',changeStatus);

module.exports=todoRouter;