import React, { useEffect } from "react";
import {Paper,Typography,CircularProgress,Divider} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import CommentSection from "./CommentSection";
import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";
import Slider from "../Slider/Slider";

const Postdetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  // console.log("user", user.result?.imageUrl);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id,dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post,dispatch]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => history.push(`/posts/${_id}`);


  console.log("testttttt", post, posts)
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.card}>
          <div className={classes.imageSlider}>
            <Slider />
          </div>
<div className={classes.rightColumn}>
<div className={classes.creator}>
  <div className={classes.creatorTop}>
<Typography variant="h6" className={classes.by} >by </Typography> 
<img className={classes.profileImage} src={post.creatorImage} alt="" />

<Typography className={classes.profileName}> {post.name }</Typography>




</div>
            <Typography className={classes.createdAt} variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            </div>
          <div className={classes.verticalCenter}>
        <Typography className={classes.message} gutterBottom variant="body1" component="p">
            
              {post.message}
            </Typography>
        </div>

        </div>

          {/* {post.selectedFile.map((file, key) => (
          <div className={classes.imageSection} key={key}>
          <img className={classes.media} src={file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>

        ))
        
} */}
        </div>

        {/* <div>
        <Typography className={classes.message} gutterBottom variant="body1" component="p">
              {post.message}
            </Typography>
        </div> */}


<div className={classes.section}>
            {/* <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography> */}
           
            {/* <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} /> */}
           
            <Divider style={{ margin: "20px 0" }} />
            <CommentSection post={post} />
            <Divider style={{ margin: "20px 0" }} />
          </div>

        {recommendedPosts.length && (
          <div className={classes.recomendedSection}>
            <Typography className={classes.recomendedHeading} gutterBottom variant="h5">
              Similar Posts you might Like
            </Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(
                ({ title, message, name, likes, selectedFile, _id }) => (
                  <div className={classes.recomendedPostEach}
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <Typography gutterBottom variant="h6" className={classes.recomendedTitle}>
                      {title}
                    </Typography>
                   
                    <Typography gutterBottom variant="subtitle2" className={classes.recomendedPostMessage}>
                      {message.substring(0, 200)}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Likes: {likes.length}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2">
                      {name}
                    </Typography>
                    <img className={classes.recomendedPostImage} src={selectedFile[0]} alt='images'  />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </Paper>
    </>
  );
};

export default Postdetails;
