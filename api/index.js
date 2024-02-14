
import express from 'express'
const app = express();
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("Connected to dataBase successfully")
}).catch(console.log)



app.listen(3000,()=>{
        console.log("app is running");
})

