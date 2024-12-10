// Make logic to make user like login or create an account

import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User doesn't exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Password is incorrect"})
        }
        if(isMatch){
            const token = createToken(user._id)
            return res.json({success:true,token})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Route for user Signup

const registerUser =  async (req,res) =>{
    try {
        const {name,email,password} = req.body;
        // check the user if already exist or not
        const exist = await userModel.findOne({email}) // findOne (in mongo) used to see if the email exist or not
        if(exist){
            return res.json({success:false,message:"User already exists"})
        }
        //validating email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Please enter strong password"})
        }

        // Hashing the user's password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save() // new user will be stored in the DB
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Route for Admin Login
const adminLogin =  async (req,res) =>{

}

export {loginUser , registerUser , adminLogin}