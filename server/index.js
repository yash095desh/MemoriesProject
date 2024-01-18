import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose"
import postRoute from './Routes/postRoute.js'
const app = express()

const port = 3000;


app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use('/post',postRoute)

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`)
    })
})
.catch((err)=>console.log(err))