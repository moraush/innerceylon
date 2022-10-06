import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import router from "../routes/posts.js";
 import redis from "redis"

const client = redis.createClient({
    // host: '<hostname>',
    port: '<6379>',
    // password: '<password>'
});

client.on(' redis error', err => {
    console.log('Error ' + err);
});









export const getPosts= async (req, res) => {
//     const client = Redis.createClient();
// const DEFAULT_EXPIRATION = 3600;

const client = redis.createClient({
    // host: '<hostname>',
    port: '<5000>',
    // password: '<password>'
});

client.on(' redis error', err => {
    console.log('Error ' + err);
});
    const {page} = req.query;
    try{
        
        const LIMIT = 9;
        const startIndex = (Number(page) - 1) *LIMIT
        const total = await PostMessage.countDocuments({})

       const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
        //const posts = await PostMessage.find()

        // console.log(posts)
        console.log('aaaaaaaaaaaa')

        // client.SETEX("LIMIT", DEFAULT_EXPIRATION, total)
        
        res.status(200).json({data:posts, currentPage: Number(page), numberOfPages:Math.ceil(total / LIMIT)});
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// export const getPostsBySearch= async (req, res) => {
//     const {searchQuery,tags} = req.query;
//     try{
//         const title = new RegExp(searchQuery , 'i');

       
//         const posts = await PostMessage.find({$or: [{title} , {tags: { $in: tags.split(',') } } ] } );
//         console.log({title})
//         console.log({tags})
//         console.log({tags: { $in: tags.split(',') } })
       

//         console.log('bbbbbbbb')
//         res.json({data: posts})
//     } catch(error) {
//         res.status(404).json({message: error.message});
//     }
// }

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

         const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in:tags.split(",") } } ]})
         //const posts = await PostMessage.find()
         //const posts = await PostMessage.find({  tags: { $in: ['galle', 'sdd'] }});
        console.log(posts)
        console.log({title})
        console.log({ tags: { $in: tags.split(",") } })
        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async(req, res) => {
    const {id} = req.params;
    try {

        const post = await PostMessage.findById(id);
        res.status(200).json(post);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}

export const createPost = async (req, res) => {
   
    const post = req.body;

    console.log('fffff',post)
    const newPost = new PostMessage({...post, creator: req.userId , createdAt: new Date().toISOString()});
    console.log('fffff',newPost)
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {

    console.log('i am in server controller')
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found to Edit');

    console.log('idiidididididid', _id)

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new: true});

    res.json(updatedPost)
}

export const deletePost = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post found to Edit');

    await PostMessage.findByIdAndRemove(id);

    res.json({message : 'Post deleted Successfully'})

}

export const likePost = async(req,res) => {
    const {id:_id} = req.params;

    if(!req.userId) return res.json({message: "Unauthenticated"})

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found to Edit');

    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId))

    if(index === -1){
        post.likes.push(req.userId);
    }else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));

    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });


    res.json(updatedPost);
    console.log('likeeeee')
}

export const commentPost = async(req,res) => {
    const {id} = req.params;
    const {value} = req.body;

    const post = await PostMessage.findById(id);

    post.comments.push(value)

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost)
}




