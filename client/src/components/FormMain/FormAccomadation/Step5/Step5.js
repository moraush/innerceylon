import React from 'react'
import {Card, CardActions, CardContent, Typography, CardMedia, Button, Paper, TextField} from "@material-ui/core";
import useStyles from "./styles";





const Step5 = ({formData, setFormData}) => {

  const classes = useStyles();




  return (
    <>
    <div> 

        <TextField value={formData.price? formData.price : null} type="number" placeholder="SLR" onChange={(e) =>  setFormData({...formData, price: e.target.value})}>
           
        </TextField>
        <Typography label ="Title" name = "tags" >Price per night</Typography>

       
    
    </div>


</>
  )
}

export default Step5