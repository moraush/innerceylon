// import React from 'react'
// import {Card, CardActions, CardContent, Typography, CardMedia, Button, Paper, TextField} from "@material-ui/core";


// const submitted = () => {
//   return (
//     <div>
//         <Typography label ="Title" name = "tags" >Please double check and submit</Typography>

//     </div>
//   )
// }

// export default submitted

import React from 'react'

const Step4 = ({formData, setFormData}) => {
//  console.log('mmmmmm' ,formData.amentities[''] )


  return (
    <div>
        <div>address :{formData.address}</div>
        <div>property :{formData.property}</div>
        <div>propertyType :{formData.propertyType}</div>
        
         { formData.amentities.Beds ? <div>amentities - Beds  :{formData.amentities.Beds}</div> : null }
         {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null}
         {formData.amentities.Bedrooms ? <div>amentities - Bedrooms  :{formData.amentities.Bedrooms}</div> : null}
         {formData.amentities.Bathrooms ? <div>amentities - Bathrooms  :{formData.amentities.Bathrooms}</div> : null}
         {formData.amentities['Private Bathrooms'] ? <div>amentities - Private Bathrooms  :{formData.amentities['Private Bathrooms']}</div> : null}
         {formData.amentities['Parking Spots'] ? <div>amentities - Parking Spots  :{formData.amentities['Parking Spots']}</div> : null}

         {/* {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null} */}
         {/* {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null} */}


     
    
    </div>
  )
}

export default Step4