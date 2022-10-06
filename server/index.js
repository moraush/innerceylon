import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Redis from "redis"
import path from "path/posix";
// require('dotenv').config({path: '.env'});

import dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import formRoutes from './routes/renters.js';

const app = express();

const redisClient = Redis.createClient();
const DEFAULT_EXPIRATION = 3600;





app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/formMain', formRoutes);

 //  ---------- deployment-------------

 const __dirname = path.resolve();


 if(process.env.NODE_ENV ==='production'){


    app.get('/', (req, res) => {
        res.send('Runnnnningggg')
    })

    // console.log('dirrrrrrrr' , __dirname)
    //  app.use(express.static(path.join(__dirname, ".." ,"client", "build")));

    

    //  app.get('*', (req,res) => {
    //      res.sendFile(path.join(__dirname, "..", 'client','build','index.html'))
    //  })


 }else{
    // app.get('/', (req, res) => {
    //     res.send('Runnding')
    // })

    console.log('dirrrrrrrr' , __dirname)
    app.use(express.static(path.join(__dirname, ".." ,"client", "build")));

   

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, "..", 'client','build','index.html'))
    })
    

 }


//  app.get('/', (req, res) => {
//     res.send('Running2')
// })



//const CONNECTION_URL='mongodb+srv://innerceylon:Rr2475597@clusterinnerceylon.bstfb.mongodb.net/innerceylon?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() =>app.listen(PORT,()=>console.log(`server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);