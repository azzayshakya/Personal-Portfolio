const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.connection_string,{
            useUnifiedTopology:true,
        })
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB










































