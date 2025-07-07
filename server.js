require("dotenv").config();
const express = require("express");
const cors=require('cors');
const  connectDB  = require("./config/mongoDb");
const  todoRouter  = require("./routes/todoRoutes");
const userRouter = require("./routes/userRouter");
const userAuthentication = require("./middleware/authUser");
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/todoList',todoRouter);
app.use('/user',userRouter);

app.listen(process.env.port, () => {
  console.log("app is running at", process.env.port);
});
