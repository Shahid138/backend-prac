// require('dotenv').config({path: './env'});

import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';


const app = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../.env')
});
connectDB();





// import mongoose from "mongoose"; // always use try catch and async await in database connections.
// import { DB_NAME } from "./constants.js";
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
        app.on("errror", (error) => {
            console.log("ERRR", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw error
    }
})() */