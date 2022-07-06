import React,{useRef} from 'react'
import background1 from '../../images/wave.jpg';
import background2 from '../../images/galleface.jpg';
import './hero.css'




const Hero = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus()
  }


  return (
    <>
   
    <div id="fading">
    <img className="one" src={background1} />
    <img className="two" src={background2} />



    
  

   

    </div>
  

    </>
  )
}

export default Hero