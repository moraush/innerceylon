import React, {useEffect} from 'react'
import {Card, Tooltip, CardActions, CardContent, Typography, CardMedia, Button, Select, InputLabel, MenuItem, FormControl} from "@material-ui/core";
import useStyles from "./styles"
import './step1.css'
import { property } from '../../data.js'
import { keys } from '@material-ui/core/styles/createBreakpoints';

const Step1 = ({formData, setFormData}) => {

  const classes = useStyles();

  console.log('hhhhh', formData.propertyType);

//   useEffect(()=>{
//     try {
// if(formData.property){
//       setFormData({});
// }
      
//     } catch (error) {
//       console.log(error)
//     }
//   },[formData.property])

  return (
    <>
    <div>
    <FormControl fullWidth>

  <InputLabel id="property-type">Property type</InputLabel>
        
<Select 
value="Select"
labelId="property-type"  onChange={(e) => !formData.propety? setFormData({...formData, property:e.target.value, amentities: {} || null}) : null}
// <select name="property-type" id="property-type" onChange={(e) => setFormData(e.target.value || null)}
        >
  <MenuItem  value="Select">{!formData.property ? 'Select': `${formData.property}`}</MenuItem>

{
  property.map((val , index) => (
    
  <MenuItem key={index} value={val.value}>{val.name}</MenuItem>

  ))
}

</Select>
</FormControl>
    </div>

{property.map((val) => (

   formData.property === val.name ?

    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{val.name} type </InputLabel>
  <Select
onChange={(e) => setFormData({...formData, propertyType:e.target.value || null})}

    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    
  >
   
    <MenuItem value={val.types.type1}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type1}</Typography></Tooltip></MenuItem>
    <MenuItem value={val.types.type2}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type2}</Typography></Tooltip></MenuItem>
    <MenuItem value={val.types.type3}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type3}</Typography></Tooltip></MenuItem>
    <MenuItem value={val.types.type4}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type4}</Typography></Tooltip></MenuItem>
    <MenuItem value={val.types.type5}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type5}</Typography></Tooltip></MenuItem>
    <MenuItem value={val.types.type6}>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">{val.types.type6}</Typography></Tooltip></MenuItem>


    
    {/* <MenuItem value='Village'>
    <Tooltip title="A sri lankan home located in rural parts of the country, where someone can expierience village lifestyle">
      <Typography className="full-width">Village Homes</Typography></Tooltip></MenuItem>
    
    <MenuItem value='Tiny'>
    <Tooltip title="Tiny homes are stanalone homes with 60 – 400 square feet in size">
    <Typography className="full-width">Tiny Home</Typography></Tooltip></MenuItem>
   
    <MenuItem value='Townhouse'><Tooltip title="Townhomes are multifloor homes with their own entrance, bathroom and kitchen space">
    <Typography className="full-width">Townhouse</Typography></Tooltip>
    </MenuItem>
    
    <MenuItem value='Cottage'><Tooltip title="Dffggfgelete">
      <Typography className="full-width">Cottage</Typography></Tooltip>
      </MenuItem>
    

    <MenuItem value='Bungalow'><Tooltip title="Delete">
      <Typography className="full-width">Bungalow</Typography></Tooltip>
      </MenuItem>

    <MenuItem value='Cabanas'><Tooltip title="A cabana is a type of shelter often found near beaches or pools">
      <Typography className="full-width">Cabanas</Typography></Tooltip>
      </MenuItem> */}
  </Select>
</FormControl> : null))}


    {/* {formData.property === 'House' ? <div>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">House Type</InputLabel>
  <Select
onChange={(e) => setFormData({...formData, propertyType:e.target.value || null})}

    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value='Tradional'>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">Tradional Sri Lankan Home</Typography></Tooltip></MenuItem>
    
    
    <MenuItem value='Village'>
    <Tooltip title="A sri lankan home located in rural parts of the country, where someone can expierience village lifestyle">
      <Typography className="full-width">Village Homes</Typography></Tooltip></MenuItem>
    
    <MenuItem value='Tiny'>
    <Tooltip title="Tiny homes are stanalone homes with 60 – 400 square feet in size">
    <Typography className="full-width">Tiny Home</Typography></Tooltip></MenuItem>
   
    <MenuItem value='Townhouse'><Tooltip title="Townhomes are multifloor homes with their own entrance, bathroom and kitchen space">
    <Typography className="full-width">Townhouse</Typography></Tooltip>
    </MenuItem>
    
    <MenuItem value='Cottage'><Tooltip title="Dffggfgelete">
      <Typography className="full-width">Cottage</Typography></Tooltip>
      </MenuItem>
    

    <MenuItem value='Bungalow'><Tooltip title="Delete">
      <Typography className="full-width">Bungalow</Typography></Tooltip>
      </MenuItem>

    <MenuItem value='Cabanas'><Tooltip title="A cabana is a type of shelter often found near beaches or pools">
      <Typography className="full-width">Cabanas</Typography></Tooltip>
      </MenuItem>
  </Select>
</FormControl>
    </div> : formData.property === 'Room' ? 
  <div>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
  <Select

onChange={(e) => setFormData({...formData, propertyType:e.target.value || null})}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value="Tradional">
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">Tradional Sri Lankan Home</Typography></Tooltip></MenuItem>
    
    
    <MenuItem value='Village'>
    <Tooltip title="A sri lankan home located in rural parts of the country, where someone can expierience village lifestyle">
      <Typography className="full-width">Village Homes</Typography></Tooltip></MenuItem>
    
    <MenuItem value='Tiny'>
    <Tooltip title="Tiny homes are stanalone homes with 60 – 400 square feet in size">
    <Typography className="full-width">Tiny Home</Typography></Tooltip></MenuItem>
   
    <MenuItem value='Townhouse'><Tooltip title="Townhomes are multifloor homes with their own entrance, bathroom and kitchen space">
    <Typography className="full-width">Townhouse</Typography></Tooltip>
    </MenuItem>
    
    <MenuItem value='Cottage'><Tooltip title="Dffggfgelete">
      <Typography className="full-width">Cottage</Typography></Tooltip>
      </MenuItem>
    

    <MenuItem value='Bungalow'><Tooltip title="Delete">
      <Typography className="full-width">Bungalow</Typography></Tooltip>
      </MenuItem>

    <MenuItem value='Cabanas'><Tooltip title="A cabana is a type of shelter often found near beaches or pools">
      <Typography className="full-width">Cabanas</Typography></Tooltip>
      </MenuItem>
  </Select>
</FormControl>

  </div>  : formData.property === 'Apartment' ?

  <div>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Apartment Type</InputLabel>
  <Select
onChange={(e) => setFormData({...formData, propertyType:e.target.value || null})}

    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value='Tradional'>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">Tradional Sri Lankan Home</Typography></Tooltip></MenuItem>
    
    
    <MenuItem value='Village'>
    <Tooltip title="A sri lankan home located in rural parts of the country, where someone can expierience village lifestyle">
      <Typography className="full-width">Village Homes</Typography></Tooltip></MenuItem>
    
    <MenuItem value='Tiny'>
    <Tooltip title="Tiny homes are stanalone homes with 60 – 400 square feet in size">
    <Typography className="full-width">Tiny Home</Typography></Tooltip></MenuItem>
   
    <MenuItem value='Townhouse'><Tooltip title="Townhomes are multifloor homes with their own entrance, bathroom and kitchen space">
    <Typography className="full-width">Townhouse</Typography></Tooltip>
    </MenuItem>
    
    <MenuItem value='Cottage'><Tooltip title="Dffggfgelete">
      <Typography className="full-width">Cottage</Typography></Tooltip>
      </MenuItem>
    

    <MenuItem value='Bungalow'><Tooltip title="Delete">
      <Typography className="full-width">Bungalow</Typography></Tooltip>
      </MenuItem>

    <MenuItem value="Cabanas"><Tooltip title="A cabana is a type of shelter often found near beaches or pools">
      <Typography className="full-width">Cabanas</Typography></Tooltip>
      </MenuItem>
  </Select>
</FormControl>
  </div> : formData.property === 'Hotel' ? 

  <div>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Hotel Type</InputLabel>
  <Select
onChange={(e) => setFormData({...formData, propertyType:e.target.value || null})}

    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value='Tradional'>
    <Tooltip  title="Traditonal Sri Lankan Home with sorrounded gardens and trees, aplace to relax peacefully">
      <Typography className="full-width">Tradional Sri Lankan Home</Typography></Tooltip></MenuItem>
    
    
    <MenuItem value='Village'>
    <Tooltip title="A sri lankan home located in rural parts of the country, where someone can expierience village lifestyle">
      <Typography className="full-width">Village Homes</Typography></Tooltip></MenuItem>
    
    <MenuItem value='Tiny'>
    <Tooltip title="Tiny homes are stanalone homes with 60 – 400 square feet in size">
    <Typography className="full-width">Tiny Home</Typography></Tooltip></MenuItem>
   
    <MenuItem value='Townhouse'><Tooltip title="Townhomes are multifloor homes with their own entrance, bathroom and kitchen space">
    <Typography className="full-width">Townhouse</Typography></Tooltip>
    </MenuItem>
    
    <MenuItem value='Cottage'><Tooltip title="Dffggfgelete">
      <Typography className="full-width">Cottage</Typography></Tooltip>
      </MenuItem>
    

    <MenuItem value='Bungalow'><Tooltip title="Delete">
      <Typography className="full-width">Bungalow</Typography></Tooltip>
      </MenuItem>

    <MenuItem value='Cabanas'><Tooltip title="A cabana is a type of shelter often found near beaches or pools">
      <Typography className="full-width">Cabanas</Typography></Tooltip>
      </MenuItem>
  </Select>
</FormControl>
  </div> : null
  }
 */}

    </>
  )
}

export default Step1