import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

// App config

const app = express()
const port = process.env.PORT || 4000
connectDB() // => to connect DB from config file
connectCloudinary() // to connect the cloud and api 

// Middlewares
app.use(express.json()) //whatever an app calls it will be passed as json
app.use(cors())


// API ENDPOINTS

app.get('/',(req,res)=>{
    res.send("API Working")
})

// Start Express Server
app.listen(port,()=>console.log('Server started on PORT: '+port))