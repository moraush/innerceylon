import { Stack, TextField, Box } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker, DateRangePicker} from '@mui/x-date-pickers'
import {LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { useState } from 'react'

const MuiDateTimePicker = ({carData, setCarData}) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
 


const date = new Date(startDate);

date.setDate(date.getDate() + 1);

// ✅ 1 Day added
console.log('ffff' , carData);
 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    
    
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
      disablePast
        label='Date Picker'
        value={startDate}
        onChange={(newValue) => {
            setStartDate(newValue)
            setCarData({...carData , startDate: newValue})
          
        }}
        renderInput={(params) => <TextField {...params} />}
      />

<DatePicker
        label='end Date Picker'
        value={endDate}
        onChange={(newValue) => {
            setEndDate(newValue)
            setCarData({...carData , endDate: newValue})


        }}
        renderInput={(params) => <TextField {...params} />}
        minDate={date}
        disablePast
      />
      {/* <TimePicker
        label='Time Picker'
        value={selectedTime}
        onChange={newValue => {
          setSelectedTime(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      /> */}
      {/* <DateTimePicker
        label='Date Time Picker'
        value={selectedDateTime}
        onChange={newValue => {
          setSelectedDateTime(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      /> */}
    </Stack>
    </LocalizationProvider>
  )
}
export default MuiDateTimePicker
