const dotenv = require("dotenv").config()
const express = require("express")
const connectDB=require("./config/connectDB")
const app = express()
const mongoose = require("mongoose")
const Task = require("./model/taskModel")
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: ["https://mern-task-app-zdik.onrender.com", "http://localhost:3000"]
}))
app.use(taskRoutes)

app.get("/",(req,res)=>{
    res.send("Home Page");
})








const PORT = process.env.PORT || 5000

mongoose 
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`); 
        })
    })
    .catch((err)=>{
        console.log(err);
    })
