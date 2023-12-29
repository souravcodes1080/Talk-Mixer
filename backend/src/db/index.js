import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`DB connected to ${db.connection.name}`)
    }
    catch(error){
        console.error(error)
    }
}

export default connectDB

