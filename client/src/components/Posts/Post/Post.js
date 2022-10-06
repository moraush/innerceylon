import React, {useState} from "react";
import {Card, CardActions, CardContent, Typography, CardMedia, Button} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './styles.css'

import { deletePost ,likePost } from "../../../actions/posts";

import useStyles from "./styles"

const Post =({post, setCurrentId}) =>{
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);

    

    const userId = user?.result?.googleId || user?.result?._id;

    const hasLikePost = post.likes.find((like) => like === (userId));



    const handleClick = async() => {
        dispatch(likePost(post._id));

        if(hasLikePost) {
            setLikes(post.likes.filter((id) => id !== userId))

        }else{
            setLikes([...post.likes, userId])

        }

    }


console.log(post)

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === (userId))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 1 ? `You and ${likes.length - 1} other` : `${likes.length} like${likes.length > 2 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };

      const openPost =() => history.push(`/posts/${post._id}`)

    return(
        <Card className={classes.card} raised elevation={6} component='div'>
            {/* <ButtonBase className={classes.cardActions} 
            onClick={openPost}
            > */}


            
            <CardMedia   className={classes.media} image={post.selectedFile[0]} title={post.title} component='div' onClick={openPost}/>
            <div className={classes.overlay}  >
                <Typography  className='name'>By: {post.name}</Typography>
                <div>
            <Typography 
                 className='createdAt'
                >{moment(post.createdAt).fromNow()}</Typography>
            </div>

            </div>
           

            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) && (


            <div className={classes.overlay2}>
                <Button style ={{color:'white'}} size="small" 
                onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>

            </div>
            )}
            <div className={classes.details}>
            


            </div>

            
            <Typography className={classes.title} variant="h5" gutterBottom onClick={openPost}>{post.title}</Typography>
          

            <CardContent  >
            <Typography  variant="body2" className='message'
             component="p" >{post.message.substring(0,150)}</Typography>
            <Typography 
            className={classes.tags}
            variant="body2" 
            >{post.tags.map((tag ) => `#${tag} `)}</Typography>
            </CardContent>
            {/* </ButtonBase> */}
            <CardActions className={classes.cardActions} >
                <Button size="small" disabled={!user?.result} color="primary" onClick={handleClick}>
                <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) && (
                    <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                    
                    </Button>
                )}
                

            </CardActions>
        </Card>
    )
}

export default Post;