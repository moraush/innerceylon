import React,{useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TextField, Typography, Paper ,Button,AppBar} from "@material-ui/core";
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




const Form =({currentId, setCurrentId}) =>{

  
    const { register, handleSubmit, reset,watch,  formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    const initialValues = {title:'',message:'', tags:'', selectedFile:[]}
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const [postData , setPostData] = useState(initialValues);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory()




 


    // const onSubmitData = (data) => {
    //     console.log('eeeeeee',data);   
    //     setPostData(data)
    // }

    useEffect(() => {if(post) setPostData(post)},[post])

    // useEffect(() => {
    //     if(postData.selectedFile){
    //     //    console.log(errors.selectedFile.message )
    //     }
    //   }, [ errors]);
    
      console.log('post datasssss out === ' , postData  )

    const handleSubmitData = (e) => {

        console.log('post datasssss in  === ' , postData)
        //  e.preventDefault();
        if(currentId){

            console.log('i am insideeeeeeeeeeeeeeee')
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
            // window.location.reload();
        }
        else if(postData.title &&postData.message && postData.tags) {
        // else if(Object.keys(errors).length === 0 && postData.title &&postData.message && postData.tags) {
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

  

        //  console.log(image.length)
        //  console.log(postData.selectedFile)
    }

  
    
 
    const clear = () => { setCurrentId(null); setPostData(initialValues) }

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography 
                variant='h6' 
                align="center">
                    Please Sign in to Create A Post
                </Typography>
            </Paper>
        )
    }

    return(
        <Paper className= {classes.paper} elevation={6} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(handleSubmitData)} >
            {/* <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(handleSubmitData)}> */}
                <Typography variant="h6">{currentId ? 'EDIT YOUR PLACE' : 'CREATE NEW PLACE'}</Typography>
               
                <TextField  
                 className={classes.textfield}
            variant="outlined"  name='title'
            {...register('title')}

                // {...register('title', {required:'Title is required'})}
                label ="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>

                <p style={{color: `orange`}}>{errors.title?.message}</p>


                <TextField 
                 inputProps={{minLength:1000}}  
                 className={classes.textfield}
                name = "message" 

                {...register('message')}

                // {...register('message', {required:'message is required',})}
                variant="outlined"
                 label ="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                 <p style={{color: `orange`}}>{errors.message?.message}</p>
                <TextField 
                 className={classes.textfield}
                
                name = "tags" 
                {...register('tags')}

                // {...register('tags', {required:'minimum one tag required'})}
                variant="outlined"
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

                    // {...register('selectedFile', {required:'image required'})}
                    />
                    
                </div>
                <p style={{color: `orange`}}>{errors.selectedFile?.message}</p>
                <Button className ={classes.buttonSubmit} 
                variant="contained" 
                color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  
                variant="contained" 
                color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// import React,{useState,useEffect} from "react";
// import {useForm} from "react-hook-form";
// import { TextField, Typography, Paper ,Button,AppBar} from "@material-ui/core";
// import FileBase from "react-file-base64"
// import { useDispatch ,useSelector} from "react-redux";
// import { createPost ,updatePost} from "../../actions/posts";
// import { useHistory } from "react-router-dom";
// import useStyles from "./styles";

// const Form =({currentId, setCurrentId}) =>{

//     const { register, handleSubmit, reset,watch,  formState: { errors } } = useForm();
//     const initialValues = {title:'',message:'', tags:'', selectedFile:[]}
//     const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
//     const [postData , setPostData] = useState(initialValues);
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const user = JSON.parse(localStorage.getItem('profile'));
//     const history = useHistory()


//     // const onSubmitData = (data) => {
//     //     console.log('eeeeeee',data);   
//     //     setPostData(data)
//     // }

//     useEffect(() => {if(post) setPostData(post)},[post])

//     // useEffect(() => {
//     //     if(postData.selectedFile){
//     //     //    console.log(errors.selectedFile.message )
//     //     }
//     //   }, [ errors]);
    
//       console.log('post datasssss out === ' , postData  )

//     const handleSubmitData = (e) => {

//         console.log('post datasssss === ' , currentId)
//         //  e.preventDefault();
//         if(currentId){

//             console.log('i am insideeeeeeeeeeeeeeee')
//             dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
//             // window.location.reload();
//         }
//         else if(Object.keys(errors).length === 0 && postData.title &&postData.message && postData.tags) {
//             console.log('i am insideeeeeeeeeeeeeeee create',postData)
//             if(postData.selectedFile.length === 0){
//                 postData.selectedFile.push("https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LK94000539-O-1-1587882362331.JPG?alt=media&generation=1587882394871789")
//             }
            

//             dispatch(createPost({...postData, name: user?.result?.name, creatorImage: user?.result?.imageUrl}, history));           
//         }
//         clear();
//     }
//     const handleFileInput = (image) => {

        

//         for(var i=0 ; i<image.length;i++){

//             postData.selectedFile.push(image[i].base64)


//         }

  

//         //  console.log(image.length)
//         //  console.log(postData.selectedFile)
//     }

  
    
 
//     const clear = () => { setCurrentId(null); setPostData(initialValues) }

//     if(!user?.result?.name){
//         return(
//             <Paper className={classes.paper}>
//                 <Typography 
//                 variant='h6' 
//                 align="center">
//                     Please Sign in to Create A Post
//                 </Typography>
//             </Paper>
//         )
//     }

//     return(
//         <Paper className= {classes.paper} elevation={6} >
//             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(handleSubmitData)} >
//             {/* <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(handleSubmitData)}> */}
//                 <Typography variant="h6">{currentId ? 'EDIT YOUR PLACE' : 'CREATE NEW PLACE'}</Typography>
               
//                 <TextField  
//                  className={classes.textfield}
//             variant="outlined"  name='title'
//                 //error = {postData.title.length ===2}
//                 {...register('title', {required:'Title is required'})}
//                 label ="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>

//                 <p style={{color: `orange`}}>{errors.title?.message}</p>


//                 <TextField 
//                  inputProps={{minLength:1000}}  
//                  className={classes.textfield}
//                 name = "message" 
//                 {...register('message', {required:'message is required',})}
//                 variant="outlined"
//                  label ="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
//                  <p style={{color: `orange`}}>{errors.message?.message}</p>
//                 <TextField 
//                  className={classes.textfield}
                
//                 name = "tags" 
//                 {...register('tags', {required:'minimum one tag required'})}
//                 variant="outlined"
//                  label ="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}/>
//                  <p style={{color: `orange`}}>{errors.tags?.message}</p>
//                 <div className={classes.fileInput}>
//                     <FileBase name='selectedFile' 
//                     type="file" 
//                     multiple
//                     required
//                     // onDone={({base64}) => setPostData({...postData, selectedFile: base64.value})}
//                     onDone={handleFileInput}
//                     // {...register('selectedFile', {required:'image required'})}
//                     />
                    
//                 </div>
//                 <p style={{color: `orange`}}>{errors.selectedFile?.message}</p>
//                 <Button className ={classes.buttonSubmit} 
//                 variant="contained" 
//                 color="primary" size="large" type="submit" fullWidth>Submit</Button>
//                 <Button  
//                 variant="contained" 
//                 color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//             </form>
//         </Paper>
//     )
// }

// export default Form;