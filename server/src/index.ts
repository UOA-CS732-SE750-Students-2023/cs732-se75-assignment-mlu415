import {config} from "dotenv"
config()
import express, { Request, Response } from "express"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes/routes"

import PostMessage from "./models/PostMessage"
const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", routes);

const PORT  = 8080


mongoose.connect(process.env.ATLASURL ?? "").then(()=> {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
})


