import React, { useState } from 'react'
import { useDispatch ,useSelector} from "react-redux";

import './styles.css'
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5/Step5';
import Step6 from './Step6/Step6';
import Step0 from './Step0/Step0';

import {Card, CardActions, CardContent, Typography, CardMedia, Button, Paper} from "@material-ui/core";
import useStyles from "./styles"
import { property } from '../data';
import {createAccommodation} from '../../../actions/accommodation'

const FormAccomadation = () => {
const classes = useStyles();
const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem('profile'));
// const {rents, isLoading} = useSelector((state) => state.rents);

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        property:'',
        propertyType: {},
        amentities:{},
        address:'',
        latlng:'',
        selectedFiles:[]
    })

    const FormTitles = ['Enter title & Availability','Choose Property and Type', 'step 2', 'step 3','step4', 'step5', 'step6'];

    const PageDisplay = () => {
        if (page === 0) {
            return <Step0 formData={formData} setFormData={setFormData}/>
        }else if (page === 1){
            return <Step1 formData={formData} setFormData={setFormData}/>
        }else if (page === 2){
            return <Step2 formData={formData} setFormData={setFormData}/>
        }else if (page === 3){
            return <Step3 formData={formData} setFormData={setFormData}/>
        }else if (page === 4){ 
            return <Step4 formData={formData} setFormData={setFormData}/>
        }     
        else if (page === 5){
            return <Step5 formData={formData} setFormData={setFormData}/>
        }
        else if (page === 6){
            return <Step6 formData={formData} setFormData={setFormData}/>
        }
    }

    const handleSubmitData = (e) => {
        // console.log('check', isLoading)
        dispatch(createAccommodation({...formData, name: user?.result?.name, creatorImage: user?.result?.imageUrl}));   
        // clear();
    }

    console.log("commmmmeee", formData )

  return (

    <div className="form">
        
        <div className="progressbar">
        <div className="form-container">
        <div className="header">
            <Typography className={classes.typography}>{FormTitles[page]}</Typography>
        </div>
        <div className="body">{PageDisplay()}</div>

        { page !== 5 ? 
        <div className="footer">
            <Button className={classes.formButton} variant="contained"
            disabled={page == 0}
            color="secondary" size="large"
            onClick={() => {setPage((currentPage) => currentPage - 1 )}}>Back</Button>          
            <Button className={classes.formButton} variant="contained"
            color="primary" size="large"
            // disabled={page == FormTitles.length - 1 || ( property.map((v) => (v.name === formData.property)))}
            disabled={page == FormTitles.length - 1 
                // || (formData.property !== 'Room' && formData.property !== 'House' && formData.property !== 'Apartment' && formData.property !== 'Hotel' && formData.property !== 'Villa')
            }
            onClick={() => {setPage((currentPage) => currentPage + 1 )}}>
               {/* {page == 4 ? 'Submit' : 'next'}  */}
                next
                </Button>
        </div>  :  
        <div className="footer">

<Button className={classes.formButton} variant="contained"
            color="secondary" size="large"

disabled={page == 0}
onClick={() => {setPage((currentPage) => currentPage - 1 )}}>Back</Button> 
        
        <Button className={classes.formButton} variant="contained" onClick={handleSubmitData}
        color="primary" size="large"
            // disabled={page == FormTitles.length - 1 || ( property.map((v) => (v.name === formData.property)))}
            // disabled={page == FormTitles.length - 1 || (formData.property !== 'Room' && formData.property !== 'House' && formData.property !== 'Apartment' && formData.property !== 'Hotel' && formData.property !== 'Villa')}
           >
               {/* {page == 4 ? 'Submit' : 'next'}  */}
                Submit
                </Button>
                </div>
       }

        </div>
        </div>

    </div>
  )
}

export default FormAccomadation