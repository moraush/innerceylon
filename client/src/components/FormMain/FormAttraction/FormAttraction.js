// import React, { useState } from 'react'
// import { useDispatch ,useSelector} from "react-redux";

// import './styles.css'
// import Step1 from './Step1/Step1'
// // import Step2 from '../FormAccomadation/Step2/Step2';
// // import Step3 from '../FormAccomadation/Step3/Step3';
// // import Step4 from '../FormAccomadation/Step4/Step4';
// // import Step5 from '../FormAccomadation/Step5/Step5';
// // import Step6 from '../FormAccomadation/Step6/Step6';
// import {Card, CardActions, CardContent, Typography, CardMedia, Button, Paper} from "@material-ui/core";
// import useStyles from "./styles"
// import { property } from '../data';
// import {createAccommodation} from '../../../actions/accommodation'

// const FormAttraction = () => {
// const classes = useStyles();
// const dispatch = useDispatch();
// const user = JSON.parse(localStorage.getItem('profile'));
// // const {rents, isLoading} = useSelector((state) => state.rents);

//     const [page, setPage] = useState(0);
//     const [formData, setFormData] = useState({
//         property:'',
//         propertyType: {},
//         amentities:{},
//         address:'',
//         latlng:''
//     })

//     const FormTitles = ['Create your Attraction'];

//     const PageDisplay = () => {
//         if (page === 0) {
//             return <Step1 />
//         }
//         // else if (page === 1){
//         //     return <Step2 formData={formData} setFormData={setFormData}/>
//         // }
//         // }else if (page === 2){
//         //     return <Step3 formData={formData} setFormData={setFormData}/>
//         // }else if (page === 3){
//         //     return <Step4 formData={formData} setFormData={setFormData}/>
//         // }else if (page === 4){ 
//         //     return <Step5 formData={formData} setFormData={setFormData}/>
//         // }     
//         // else if (page === 5){
//         //     return <Step6 formData={formData} setFormData={setFormData}/>
//         // }
//     }

//     const handleSubmitData = (e) => {
//         // console.log('check', isLoading)
//         // dispatch(createAccommodation({...formData, name: user?.result?.name, creatorImage: user?.result?.imageUrl}));   
//         // clear();
//     }

//     console.log("commmmmeee", formData )

//   return (

//     <div className="form">
        
//         <div className="progressbar">
//         <div className="form-container">
//         {/* <div className="header">
//             <Typography className={classes.typography}>{FormTitles[page]}</Typography>
//         </div> */}
//         <div className="body">{PageDisplay()}</div>

//         { page !== 5 ? 
//         <div className="footer">
//             <Button className={classes.formButton} variant="contained"
//             disabled={page == 0}
//             onClick={() => {setPage((currentPage) => currentPage - 1 )}}>Back</Button>          
//             <Button className={classes.formButton} variant="contained"
//             // disabled={page == FormTitles.length - 1 || ( property.map((v) => (v.name === formData.property)))}
//             disabled={page == FormTitles.length - 1 || (formData.property !== 'Room' && formData.property !== 'House' && formData.property !== 'Apartment' && formData.property !== 'Hotel' && formData.property !== 'Villa')}
//             onClick={() => {setPage((currentPage) => currentPage + 1 )}}>
//                {/* {page == 4 ? 'Submit' : 'next'}  */}
//                 next
//                 </Button>
//         </div>  :  
//         <div className="footer">

// <Button className={classes.formButton} variant="contained"
// disabled={page == 0}
// onClick={() => {setPage((currentPage) => currentPage - 1 )}}>Back</Button> 
        
//         <Button className={classes.formButton} variant="contained" onClick={handleSubmitData}
//             // disabled={page == FormTitles.length - 1 || ( property.map((v) => (v.name === formData.property)))}
//             // disabled={page == FormTitles.length - 1 || (formData.property !== 'Room' && formData.property !== 'House' && formData.property !== 'Apartment' && formData.property !== 'Hotel' && formData.property !== 'Villa')}
//            >
//                {/* {page == 4 ? 'Submit' : 'next'}  */}
//                 Submit
//                 </Button>
//                 </div>
//        }

//         </div>
//         </div>

//     </div>
//   )
// }

// export default FormAttraction


import React from 'react'
import Form from '../../Form/Form'

const FormAttraction = () => {
  return (
    <div><Form /></div>
  )
}

export default FormAttraction