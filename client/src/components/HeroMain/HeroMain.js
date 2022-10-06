import React,{useRef,useState} from 'react'
import { Button } from '@material-ui/core';
import './styles.scss'
import heroimg from "../../images/R1.jpeg" ;
import Search from '../Search/Search';
import { useHistory } from "react-router-dom";
import useStyles from "./styles";



const HeroMain = ({refToCreatePost}) => {
  // const heroCreateRef = useRef();
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetMiddle)  
  // const scrollToRef = (ref) => heroCreateRef.current.scrollIntoView()
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  const classes = useStyles();




  const ScrollToCreatePost =() => {
    console.log('useRef checkkkk', refToCreatePost.current)
    // scrollToRef(heroCreateRef)
    if(refToCreatePost.current){
    refToCreatePost.current.scrollIntoView()
    }

  }

  const goToAuth = () => {
    history.push('/auth')
  }

  console.log('userr in heromain', user)

  return (
    <div>

<div className="parallax-wrapper">
  <div className="hero parallax-content"><img src={heroimg} alt="Photo of city during a sunset by Sterling Davis"/>
  
    <div className="hero__title">
      <h1>Sri Lankan Glimps</h1>
      {user?.result?.name ? (
        <p>Explore and <Button className={classes.btn} variant= "contained"
         onClick={ScrollToCreatePost}> Add</Button> Attractions  &nbsp;  </p>) 
      : 
      <p>Explore now and    <Button className={classes.btn} variant= "contained" onClick={goToAuth}> ADD</Button> new attractions</p>
      }
      
        
        <Search />
    </div>
  </div>
  {/* <div className="main-content">
    <div className="scroll-icon-container">
      <svg className="icon--down-arrow" viewBox="0 0 24 24">
        <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
      </svg>
    </div>

    <div className="creamBG">
    <h2>some quotes about Sri Lanka</h2>
    <p  >“In Sri Lanka, when two strangers meet, they ask a series of questions that reveal family, ancestral village, and blood ties until they arrive at a common friend or relative. Then they say, "Those are our people, so you are our people." It's a small place. Everyone knows everyone.
"But in America, there are no such namings; it is possible to slip and slide here. It is possible to get lost in the nameless multitudes. There are no ropes binding one, holding one to the earth. Unbound by place or name, one is aware that it is possible to drift out into the atmosphere and beyond that, into the solitary darkness where there is no oxygen.”
― Nayomi Munaweera, What Lies Between Us</p>
    <p 
    // ref={heroCreateRef}
    >“What struck me, in reading the reports from Sri Lanka, was the mild disgrace of belonging to our imperfectly evolved species in the first place. People who had just seen their neighbors swept away would tell the reporters that they knew a judgment had been coming, because the Christians had used alcohol and meat at Christmas or because ... well, yet again you can fill in the blanks for yourself. It was interesting, though, to notice that the Buddhists were often the worst. Contentedly patting an image of the chubby lord on her fencepost, a woman told the New York Times that those who were not similarly protected had been erased, while her house was still standing. There were enough such comments, almost identically phrased, to make it seem certain that the Buddhist authorities had been promulgating this consoling and insane and nasty view. That would not surprise me.”
― Christopher Hitchens</p>
  </div>
  </div> */}
</div>
    </div>
  )
}

export default HeroMain