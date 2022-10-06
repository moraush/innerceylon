import mongoose from "mongoose";
import RenterMessage from "../models/renterMessage.js";

export const createRenter = async (req, res) => {
   
    const post = req.body;

    console.log('fffff2',post)
    const newPost = new RenterMessage({...post, creator: req.userId , createdAt: new Date().toISOString()});
    console.log('fffff3',newPost)
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}