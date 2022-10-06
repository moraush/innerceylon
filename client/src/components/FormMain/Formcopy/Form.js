import React,{useState,useEffect,useRef,useImperativeHandle,forwardRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TextField, Typography, Paper ,Button} from "@material-ui/core";
import FileBase from "react-file-base64"
import { useDispatch ,useSelector} from "react-redux";
import { createPost ,updatePost} from "../../actions/posts";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const schema = yup.object().shape({
    title: yup.string().required("dddddd"),
    message: yup.string().min(200).required(),
    tags: yup.string().required(),
})

const Form =forwardRef(({currentId, setCurrentId},ref) =>{

  
    const { register, handleSubmit, reset,watch,  formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    const initialValues = {title:'',message:'', tags:'', selectedFile:[]}
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const [postData , setPostData] = useState(initialValues);
    // const [userType , setUserType] = useState(1);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory()
    const refCreate = useRef();

    useImperativeHandle(ref, () =>({
        scrollIntoView: () => { 
            refCreate.current.scrollIntoView();
        }
    }))

    useEffect(() => {
        console.log('eeeeeee',refCreate.current); 
    },[])
 
    useEffect(() => {if(post) setPostData(post)},[post])

    console.log('post datasssss out === ' , postData  )

    const handleSubmitData = (e) => {
        console.log('eeeeeeiiiiie',refCreate.current); 
        console.log('post datasssss in  === ' , postData)
        //  e.preventDefault();
        if(currentId){

            console.log('i am insideeeeeeeeeeeeeeee')
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
        }
        else if(postData.title &&postData.message && postData.tags) {
            console.log('i am insideeeeeeeeeeeeeeee create',postData)
            if(postData.selectedFile.length === 0){
                postData.selectedFile.push("https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LK94000539-O-1-1587882362331.JPG?alt=media&generation=1587882394871789")
            }
            dispatch(createPost({...postData, name: user?.result?.name, creatorImage: user?.result?.imageUrl}, history));           
        }
        clear();
    }
        const handleFileInput = (image) => {

        
        for(var i=0 ; i<image.length;i++){
            postData.selectedFile.push(image[i].base64)
        }
    }

    const clear = () => { setCurrentId(null); setPostData(initialValues) }

    if(!user?.result?.name){
        return(
            <Paper ref={refCreate} className={classes.paper}>
                <Typography 
                variant='h6' 
                align="center">
                    Please Sign in to Create A Post
                </Typography>
            </Paper>
        )
    }

    return(
        
        <Paper ref={refCreate}  className= {classes.paper} elevation={6} >
            <h1>Create a new Place below</h1>
            <h3>add a title to your place with minimum of 200 charactors of description also add some tags and pictures to identify your creation, please avoid posting places away from the Island</h3>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(handleSubmitData)} >
                <Typography variant="h6">{currentId ? 'EDIT YOUR PLACE' 
                : 'CREATE NEW PLACE'}</Typography>
               
                <TextField  
                 className={classes.textfield}

            name='title'
            {...register('title')}

                label ="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>

                <p style={{color: `orange`}}>{errors.title?.message}</p>


                <TextField 
                 inputProps={{minLength:1000}}  
                 className={classes.textfield}
                name = "message" 



                

   
                {...register('message')}

                 label ="Message" fullWidth multiline minRows={12} value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                 <p style={{color: `orange`}}>{errors.message?.message}</p>
                <TextField 
                 className={classes.textfield}
                
                name = "tags" 
                {...register('tags')}

                 label ="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}/>
                 <p style={{color: `orange`}}>{errors.tags?.message}</p>
                <div className={classes.fileInput}>
                    <FileBase name='selectedFile' 
                    type="file" 
                    multiple
                    required
                    // onDone={({base64}) => setPostData({...postData, selectedFile: base64.value})}
                    onDone={handleFileInput}
            // ref={register}

                   
                    />
                    
                </div>
                <p style={{color: `orange`}}>{errors.selectedFile?.message}</p>
                
                <Button className ={classes.buttonSubmit} 
                variant="contained" 
                color="primary" size="large" type="submit" >Submit</Button>
                <br/>
     
                <Button  className ={classes.buttonClear} 
                variant="contained" 
                color="secondary" size="small" onClick={clear} >Clear</Button>
                
            </form>
        </Paper>
    )
})

export default Form;










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






