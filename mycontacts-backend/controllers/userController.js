//@desc Register a user
//@route POST /api/users/register
//@access public
const bcrypt = require("bcrypt");
const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const registerUser = AsyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed Password", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({_id:user, email:user.email,})
    }
    else{
        res.status(400);
        throw new Error("User data is not Valid")
    }
    res.json({message:"Register the user"});
})
//Login
//@route POST /api/users/login
const loginUser = AsyncHandler(async(req,res)=>{
    res.json({message:"Login user"});
})
//View Current
//@route POST /api/users/current

const currentUser = AsyncHandler(async(req,res)=>{
    res.json({message:"Current user"});
})

module.exports = {registerUser, loginUser, currentUser};