import express from 'express';
import { loginUser, registerUser,adminLogin } from '../controllers/userController';

const userRouter = express.Router(); //create one user router

userRouter.post('/register',registerUser) // used to make the register function
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;