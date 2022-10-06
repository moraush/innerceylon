import React,{useState} from 'react'
import {LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import MuiDateTimePicker from './MuiDateTimePicker'

const FormCar = () => {

  const [carData, setCarData] = useState({
    startDate:'',
    //  propertyType: {},
    // amentities:{},
    endDate:'',
    // latlng:'',
    // selectedFiles:[]
})

  return (
    
    
    <div className ='container'>
      <MuiDateTimePicker carData={carData} setCarData={setCarData}/>
      </div>
    
   
  
  )
}

export default FormCar