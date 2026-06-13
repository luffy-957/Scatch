import express from "express";
import mongoose from "mongoose";

const app = express();

app.listen(3000, (err)=>{
    console.log("server is up and running at localhost:3000")
})