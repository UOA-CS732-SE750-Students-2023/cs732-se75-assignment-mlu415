import express, { Request, Response } from "express"
import mongoose from "mongoose"

import PostMessage from "./models/PostMessage"
const app = express()

const db = await mongoose.connect("mongodb+srv://michelle:test@atlascluster.oay4do7.mongodb.net/?retryWrites=true&w=majority")


app.get("/", (req: Request,res: Response)=>{
    res.send("Hello I am here")
})

app.listen(8080)