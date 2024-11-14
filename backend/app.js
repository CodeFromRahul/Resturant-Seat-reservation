import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { dbConnection } from "./db/dbConnection.js"
import { errorMiddleware } from "./error/error.js"
import resevationRouter from "./routes/Reservationroutes.js"


const app =express()

dotenv.config({path:'./config/config.env'})
app.use(
    cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorMiddleware)

app.use("/api/v1/reservation",resevationRouter)



app.listen(process.env.PORT,()=>{
     console.log(`Server is running ${process.env.PORT}` )
     dbConnection();

})