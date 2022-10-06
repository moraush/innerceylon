import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './styles.css'
import BtnSlider from './BtnSlider'


const Slider = () => {
  const {post} = useSelector((state) => state.posts);

    const [slideIndex,setSlideIndex] = useState(1)
console.log('lengthhhh',post.selectedFile.length)


    const nextSlide = () => {
        if(slideIndex !== post.selectedFile.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === post.selectedFile.length){
            setSlideIndex(1)
        }  
    }


    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex-1)
        }else if(slideIndex === 1)
        {
            setSlideIndex(post.selectedFile.length)
        }


    }

    const moveDot = (index) => {
        setSlideIndex(index)

    }

  console.log('slider', post)

  return (
      <>
      <h3 className='title' variant="h3" component="h2">
              {post.title}
            </h3>
  <div className="container-slider">
      {post.selectedFile.map((obj, index) => {
          return(
              <div 
              key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            >
                
          <img key={index} src={obj} alt={post.title} />
                
              </div>
          )

          } )}

<BtnSlider moveSlide={nextSlide} direction={"next"}/>
  <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
  <div className="container-dots">
      {post.selectedFile.map((item, index) =>(
          <div key={index}
          onClick={() => moveDot(index+1)}
          className={slideIndex === index +1 ?"dot active" :
          "dot"}>
              
              <img key={index} className='dot-image' src={item}  alt="https://www.gannett-cdn.com/-mm-/05e97d16e7fb53439a4222e53dcba47d4d31dde8/c=0-97-1280-584/local/-/media/USATODAY/USATODAY/2014/06/04/1401911998000-AP-Color-Cosmos.jpg?width=3200&height=1680&fit=crop" />

          </div>
      ))}

  </div>

  </div>
 
  </>
  )
}

export default Slider

