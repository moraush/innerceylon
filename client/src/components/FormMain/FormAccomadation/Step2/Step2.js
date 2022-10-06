import React from 'react'
import House from './House/House'
import {Card, CardActions, CardContent, Typography, CardMedia, Button, Paper} from "@material-ui/core";
import useStyles from "./styles"

const Step2 = ({formData, setFormData}) => {
const classes = useStyles();

  return (
    <Paper elevation={10}>
        <div>{
        formData.property  ? <House formData={formData} setFormData={setFormData}/> 
        // formData.property === 'Room' ? <Room formData={formData} setFormData={setFormData}/> : 
        // formData.property === 'Apartment' ? <Apartment formData={formData} setFormData={setFormData}/> : 
        // formData.property === 'Hotel' ? <Hotel formData={formData} setFormData={setFormData}/> :
        // formData.property === 'Villa' ? <Hotel formData={formData} setFormData={setFormData}/> 
        : null

        }</div>
</Paper>
  )
}

export default Step2