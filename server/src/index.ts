import {config} from "dotenv"
config()

import express, { Request, Response } from "express"
import mongoose from "mongoose"

import PostMessage from "./models/PostMessage"
const app = express()

app.use(express.json()) //middleware

const PORT  = 8080

app.post("/posts", async (req: Request,res: Response)=>{
    const newPost = new PostMessage({
        title: req.body.title,
        inventory: req.body.inventory,
    });
    const createdPost = await newPost.save();
    res.json(createdPost)
})


mongoose.connect(process.env.ATLASURL ?? "").then(()=> {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
})


