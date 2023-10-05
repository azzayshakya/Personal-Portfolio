const express=require('express')
require("dotenv").config({ path: ".env" });
const User=require('./model')
const connectDB=require('./user')

const cors=require('cors')

connectDB()


const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/formData',(req,res)=>{
    console.log(req.body)
    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        message:req.body.message,
        subject:req.body.subject
    })

    newUser.save()

    res.json({msg:"form submitted successfully"})
})


app.listen(8000,()=>{
    console.log("server is running you better catch it!")
})