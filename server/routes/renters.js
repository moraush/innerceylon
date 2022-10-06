import express from 'express';
// import FormMain from '../../client/src/components/FormMain/FormMain.js';
// import {getPostsBySearch, commentPost,getPosts ,getPost, createPost,updatePost,deletePost, likePost} from '../controllers/posts.js';

import auth from '../middleware/auth.js';
import  {createRenter} from '../controllers/renters.js'

const router = express.Router();



router.post('/',auth, createRenter);
// router.patch('/:id',auth, updatePost);
// router.delete('/:id',auth, deletePost);
// router.patch('/:id/likePost',auth, likePost);
// router.post('/:id/commentPost',auth, commentPost);

export default router;
