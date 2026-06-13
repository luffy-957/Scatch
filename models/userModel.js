import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema= mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart: {
        type:Array,
        default:[]
    },

    isAdmin: boolean,

    orders:{
        type:Array,
        default:[]
    },
    contact: Number,
    picture:String

});

export default mongoose.model("user", userSchema);