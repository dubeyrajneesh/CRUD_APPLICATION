import express from 'express' ;
import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;
import Router from './routes/Route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express() ;
const PORT = 4000 ;

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()) ;
app.use('/' , Router)

dotenv.config() ;

const USERNAME= process.env.DB_USERNAME ;
const PASSWORD= process.env.DB_PASSWORD;

const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@crud.infradk.mongodb.net/crud?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URL , {useNewUrlParser:true}) ;
mongoose.connection.on('connected' , ()=>{
    console.log("DB is connected")
})
mongoose.connection.on('disconnected' , ()=>{
    console.log("Oops  , DB is disconnected")
})

mongoose.connection.on('error' , (error)=>{
    console.log("Some error while connecting to database") ;
})

app.listen(PORT , ()=>{
    console.log(`You are on PORT :  ${PORT}`)
})