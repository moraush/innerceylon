// import React from 'react'

// const Step4 = ({formData, setFormData}) => {
// //  console.log('mmmmmm' ,formData.amentities[''] )


//   return (
//     <div>
//         <div>address :{formData.address}</div>
//         <div>property :{formData.property}</div>
//         <div>propertyType :{formData.propertyType}</div>
        
//          { formData.amentities.Beds ? <div>amentities - Beds  :{formData.amentities.Beds}</div> : null }
//          {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null}
//          {formData.amentities.Bedrooms ? <div>amentities - Bedrooms  :{formData.amentities.Bedrooms}</div> : null}
//          {formData.amentities.Bathrooms ? <div>amentities - Bathrooms  :{formData.amentities.Bathrooms}</div> : null}
//          {formData.amentities['Private Bathrooms'] ? <div>amentities - Private Bathrooms  :{formData.amentities['Private Bathrooms']}</div> : null}
//          {formData.amentities['Parking Spots'] ? <div>amentities - Parking Spots  :{formData.amentities['Parking Spots']}</div> : null}

//          {/* {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null} */}
//          {/* {formData.amentities.Guests ? <div>amentities - Guests  :{formData.amentities.Guests}</div> : null} */}


     
    
//     </div>
//   )
// }

// export default Step4


import React from 'react'
import FileBase from "react-file-base64"
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DeleteIcon from '@mui/icons-material/Delete';



const Step4 = ({formData, setFormData}) => {


  const handleFileInput = (image) => {

        
    for(var i=0 ; i<image.length;i++){
        formData.selectedFiles.push(image[i].base64)
        setFormData({...formData})
    }
}



  return (

    <>
            <div className="file-card">
                <div className="file-inputs">
                <FileBase name='selectedFile' 
    type="file" 
    multiple
    required
    // onDone={({base64}) => setPostData({...postData, selectedFile: base64.value})}
    onDone={handleFileInput} 
    // ref={register}
    />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                </div>
                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>
            </div>

{formData.selectedFiles.map((e)=> (
  <>
  <DeleteIcon className='deleteIcon'/>

  <img src={e} alt=""  className='imageselected' />
  </>
)



)}
 

<svg data-testid="DeleteIcon"></svg>


            {/* <div><img className='imageselected' src={formData.selectedFiles[0]} alt="" /></div> */}
        </>

 
  )
}

export default Step4