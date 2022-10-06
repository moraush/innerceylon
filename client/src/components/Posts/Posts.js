import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import "./styles.css"

const Posts = ({ setCurrentId }) => {
  const {posts, isLoading} = useSelector((state) => state.posts);
  // const {hotels} = useSelector((state) => state.hotels);
  
  const classes = useStyles();




 

 

  if(!posts.length && !isLoading) return "No Posts"

  return (
    
    isLoading ? <CircularProgress /> : (

      <div className="posts">
        {posts.map((post) => (
        <div className="post">
          <Post post={post} setCurrentId={setCurrentId} />

        </div>
        ))}
      </div>
      // <Grid className={classes.container} container alignItems="stretch" maxWidth = "l"  >
      //   {posts.map((post) => (
      //     <Grid key={post._id}  xs={12} sm={12} md={4} lg={4} className={classes.postHome}>
      //       <Post post={post} setCurrentId={setCurrentId} />
      //     </Grid>
      //   ))}
      // </Grid>
    )
  );
};

export default Posts;