import mongoose from "mongoose"

const ownerSchema= mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    products: {
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:Number

});

export default mongoose.model("owner", ownerSchema);