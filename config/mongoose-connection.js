import mongoose from "mongoose";

mongoose.connect("monogdb://127.0.0.1:27017/scatch")
.then(()=>{
    console.log("Database connected!")
})
.catch((err)=>{
    console.log(err)
})

export default mongoose.connection;