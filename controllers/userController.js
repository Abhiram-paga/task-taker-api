const { findOne } = require("../models/todo");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Details not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.json(201).json({ message: "Registered Successfully!!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "No proper details" });
    }
    const user = await User.findOne({ email });

    console.log(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    const isPasswordMatched=await bcrypt.compare(password,user.password);
    if(!isPasswordMatched){
        res.status(400).json({error:'password incorrect'});
    }

    const jwtToken=jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1hr'});
    res.status(200).json({'token':jwtToken});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserData=async (req,res)=>{
    try{
        res.status(200).json("Hello User");
    }catch(err){
        res.status(500).json({error:err.message});
    }

}

module.exports = {registerUser,loginUser,getUserData};
