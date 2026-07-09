import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import path from "path";
import url from "url";
//routes import
import ownersRouter from "./routes/ownersRouter.js"
import usersRouter from "./routes/usersRouter.js"
import productsRouter from "./routes/productsRouter.js"

import db from "./config/mongoose-connection.js"

const app = express();

const __filename=url.fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.send("kem chho")
})

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.listen(3000, (err)=>{
    console.log("server is up and running 3000")
})