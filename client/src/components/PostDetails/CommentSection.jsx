import React , {useState, useRef} from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
// import { mergeClasses } from '@material-ui/styles';
import {commentPost} from '../../actions/posts'


const CommentSection = ({post}) => {

    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const commentsRef = useRef()


    const handleClick = async() => {

        const finalComment = `${user.result.name}: ${comment}`
        const newComments= await dispatch(commentPost(finalComment, post._id))

        setComments(newComments)
        setComment("")
if(comments) 
        commentsRef.current.scrollIntoView();
    };


    console.log("egwrgeg",post)
    console.log("commeentsssss",comments[0])
  return (
    <div>
        <div className={classes.commentsOuterContainer}>


        {user?.result?.name ?(

    
<div style={{width:'70%'}} className={classes.commentBox}>
        <Typography gutterBottom variant='h6'>Share your Comment</Typography>
        <TextField 
        className={classes.commentTextField}
        fullWidth
        minRows={4}
        variant='outlined'
        multiline
        label='comment'
        value={comment}
        onChange ={(e) => setComment(e.target.value)}

        />
        <Button style={{marginTop:'10px'}} fullWidth className={classes.commentButton} disabled={!comment} variant='contained' onClick={handleClick} >
Comment
        </Button>
</div>
):
<div className={classes.notUserComment}><a href="/auth" className={classes.href}>Sign In </a> to comment</div>

}
<a href=""></a>

    <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant='h6' className={classes.commentTitle}>Comments</Typography>
        {comments.map((c,i) => (
            <Typography key = {i} gutterBottom variant='subtitle1'>
               <strong> {c.split(':')[0]}</strong>
               {c.split(':')[1]}
            </Typography>
        ))}
        <br/><br />
       <div ref= {commentsRef}/>
       
    </div>
    

    {/* {user?.result?.name &&(

    
    <div style={{width:'70%'}}>
            <Typography gutterBottom variant='h6'>Share your Comment</Typography>
            <TextField 
            fullWidth
            minRows={4}
            variant='outlined'
            multiline
            label='comment'
            value={comment}
            onChange ={(e) => setComment(e.target.value)}

            />
            <Button style={{marginTop:'10px'}} fullWidth disabled={!comment} variant='contained' color='primary' onClick={handleClick} >
Comment
            </Button>
    </div>
  )} */}
        </div>
       
    </div>
  )
}

export default CommentSection