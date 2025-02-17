import mongoose from "mongoose"; // always use try catch and async await in database connections.
import mydb, { DB_NAME } from "./constants.js";
import express from "express";

const app = express();

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
        throw err
    }
})()