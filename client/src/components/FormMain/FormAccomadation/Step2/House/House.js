import React from 'react'
import './styles.css'
import {Card, CardActions, CardContent, Typography, CardMedia, Button} from "@material-ui/core";
import useStyles from "./styles"
import * as FaIcons from 'react-icons/fa';
import { AmentitiesHouse ,AmentitiesRoom,AmentitiesHotel,AmentitiesApartment,AmentitiesVilla, property  } from '../../../data';

import { Paper } from '@mui/material'



const House = ({formData, setFormData}) => {
    const classes = useStyles();

    console.log('gggggg', formData)
  return (
      <>
      
      
    <Paper className={classes.paper}  elevation={10}>
        

{ 
formData.property === 'House' ?

AmentitiesHouse.map((val) => (
    <div className="flex-inline bg">
            <div className="margin"><Typography className={classes.typo}>{val.name}</Typography>
           </div>
            <div>
            <div className="flex-inline"><Button className={classes.button} variant="contained" onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]:formData.amentities[val.name] ? formData.amentities[val.name] +1 : 1}})}>
        <FaIcons.FaPlus/>
            </Button>
            <Typography >{ formData.amentities[val.name] ? formData.amentities[val.name] : 0}</Typography>
            <div className="left-margin">
            <Button className={classes.button} variant="contained"  disabled={formData.amentities.guests === 0} onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]: formData.amentities[val.name] ? formData.amentities[val.name] - 1 : 0}})}>
            <FaIcons.FaMinus/>
            </Button>
            </div></div>
            </div>
        </div> 
)) : formData.property === 'Room' ?  
AmentitiesRoom.map((val) => (
    <div className="flex-inline bg">
            <div className="margin"><Typography className={classes.typo}>{val.name}</Typography>
           </div>
            <div>
            <div className="flex-inline"><Button className={classes.button} variant="contained" onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]:formData.amentities[val.name] ? formData.amentities[val.name] +1 : 1}})}>
        <FaIcons.FaPlus/>
            </Button>
            <Typography >{ formData.amentities[val.name] ? formData.amentities[val.name] : 0}</Typography>
            <div className="left-margin">
            <Button className={classes.button} variant="contained"  disabled={formData.amentities.guests === 0} onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]: formData.amentities[val.name] ? formData.amentities[val.name] - 1 : 0}})}>
            <FaIcons.FaMinus/>
            </Button>
            </div></div>
            </div>
        </div> 
)) : formData.property === 'Hotel' ?  
AmentitiesHotel.map((val) => (
    <div className="flex-inline bg">
            <div className="margin"><Typography className={classes.typo}>{val.name}</Typography>
           </div>
            <div>
            <div className="flex-inline"><Button className={classes.button} variant="contained" onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]:formData.amentities[val.name] ? formData.amentities[val.name] +1 : 1}})}>
        <FaIcons.FaPlus/>
            </Button>
            <Typography >{ formData.amentities[val.name] ? formData.amentities[val.name] : 0}</Typography>
            <div className="left-margin">
            <Button className={classes.button} variant="contained"  disabled={formData.amentities.guests === 0} onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]: formData.amentities[val.name] ? formData.amentities[val.name] - 1 : 0}})}>
            <FaIcons.FaMinus/>
            </Button>
            </div></div>
            </div>
        </div> 
)) : formData.property === 'Apartment' ?  
AmentitiesApartment.map((val) => (
    <div className="flex-inline bg">
            <div className="margin"><Typography className={classes.typo}>{val.name}</Typography>
           </div>
            <div>
            <div className="flex-inline"><Button className={classes.button} variant="contained" onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]:formData.amentities[val.name] ? formData.amentities[val.name] +1 : 1}})}>
        <FaIcons.FaPlus/>
            </Button>
            <Typography >{ formData.amentities[val.name] ? formData.amentities[val.name] : 0}</Typography>
            <div className="left-margin">
            <Button className={classes.button} variant="contained"  disabled={formData.amentities.guests === 0} onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]: formData.amentities[val.name] ? formData.amentities[val.name] - 1 : 0}})}>
            <FaIcons.FaMinus/>
            </Button>
            </div></div>
            </div>
        </div> 
)) : formData.property === 'Villa' ?  
AmentitiesVilla.map((val) => (
    <div className="flex-inline bg">
            <div className="margin"><Typography className={classes.typo}>{val.name}</Typography>
           </div>
            <div>
            <div className="flex-inline"><Button className={classes.button} variant="contained" onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]:formData.amentities[val.name] ? formData.amentities[val.name] +1 : 1}})}>
        <FaIcons.FaPlus/>
            </Button>
            <Typography >{ formData.amentities[val.name] ? formData.amentities[val.name] : 0}</Typography>
            <div className="left-margin">
            <Button className={classes.button} variant="contained"  disabled={formData.amentities.guests === 0} onClick={() => setFormData({...formData,amentities:{...formData.amentities, [val.name]: formData.amentities[val.name] ? formData.amentities[val.name] - 1 : 0}})}>
            <FaIcons.FaMinus/>
            </Button>
            </div></div>
            </div>
        </div> 
)) : null

}


     

</Paper>


</>
  )
}

export default House