import express, { application } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors()); // use method is use for middleware and configsetting

app.use(express.json({limit :"16kb"})) // use in production grade application
app.use(express.urlencoded({extended:true , limit :"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js";


// routes declartion

app.use("/api/v1/users",userRouter)
export {app}