// import { yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

// import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus&family=Merriweather&family=Montserrat:wght@500&display=swap');


export default makeStyles((theme) => ({
  media: {
    borderRadius: '5px',
    objectFit: 'cover',
    width: '95%',
    maxHeight: '400px',
    marginTop:'10px',
    
   

  },

  paper:{
    backgroundColor: '#FAF9F7 ',
    marginTop:'90px',
   

  },

  imageSlider: {
    height:'100%',
    width:'100%',
    backgroundColor: '#4D85A6',
    paddingBottom:'60px'
    
  },


 


  card: {
    display: 'flex',
    width: '100%',
    justifyContent:'space-around',
    // flexWrap:'wrap',
    
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },


  verticalCenter:{
    overflowY:'auto',
    display:'flex',
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'center',
    height:'650px'

  },

  creatorTop:{
    display: 'flex',
    justifyContent: 'space-between',
    // width: '400px',
    alignItems: 'center',
    marginTop:'20px',
    marginRight:'20px'
    
  },

  creator:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    // justifyContent:'space-around',
    // background:'white',
    // alignItems:'right',
    // marginRight:'0 auto',
    textAlign:'right',
    
  },

  createdAt:{
    color:'#8390AB',
    marginRight:'20px'

  },

  rightColumn:{
 minWidth:'30%'
  },

  profileName:{
    color:'#8390AB',

    fontSize:'1.5rem',
    textTransform:'capitalize'
  },

  by:{

    color:'#8390AB'
  },

  profileImage:{
    
    width:'40px',
    borderRadius:'50%',
    margin:'0 8px'
    // margin:'auto'
    // padding:'20px'
    // marginTop:'30px'

  },


  message: {
    // overflowX:'auto',

    color:'#5289B6',
    textAlign:'center',

    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    maxWidth:'700px',
    verticalAlign:'center',
    marginTop:'20px',
    fontFamily: "Roboto" ,
    fontSize:'1.15rem',
    fontWeight:'bold',
    margin: '10px 20px',
    flex: 1,
    flexWrap:'wrap',
    

    [theme.breakpoints.down('sm')]: {
      width:'90%',
      margin:'5% auto',
      
      padding:'0 5%'
    },
  },
  imageSection: {
    marginLeft: '20px',
   
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },

  commentsOuterContainer :{
   padding:'40px 0',display:'flex', justifyContent: 'space-between', background: '#8390AB',
  //  boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
   margin:'0 20px'

  },

  commentsInnerContainer:{
    height: '200px',width:'60%', overflowY:'auto', marginLeft:'30px',marginRight:'20px', color:'#E7EDF1'
  },

  commentBox:{
    color:'#FAF9F7',
    marginLeft:'20px'

  },

  commentTextField :{
color:'white'
  },

  commentButton:{
background:'#FAF9F7',
color:'#8390AB'
  },
  recomendedPostImage:{
    width:'300px',
    height:'220px',
    borderRadius:'5px',
    marginBottom:'20px',
  //  boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',



  },

  commentTitle:{
    color:'#323D66  ',
    fontSize:'23px',
    fontWeight:900
  },
  recomendedSection: {
    background: '#CBCCE6',
  //  boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin:'40px 20px'
      },

      // recommendedPosts:{
      //   backgroundColor:'#93ABC4',
      //   display:'flex',
      //   overflowX:'auto',
      //   alignItems:'center',
      
      // },


      recomendedPostEach:{
        backgroundColor:'#ABC6DC',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        minWidth:'300px',
  //  boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // overflowX:'auto'
      },

      recomendedHeading:{
        backgroundColor:'#93ABC4',
        fontFamily:"'Roboto Slab', serif",
        fontWeight:900,

        color:'#E7EDF1',
        textAlign:'center',
        padding:'30px 0',
        textTransform:'uppercase'

      },

      recomendedTitle:{
        // color:'#6E94DB',
        fontFamily:"'Roboto Slab', serif",
        fontWeight:900,
        color: '#FAF8F8',
        fontSize:'2rem',
        textAlign:'center',
    textShadow: "1px 1px 1px #919191,1px 2px 1px #919191, 1px 3px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)"

        /* background-color:white; */
        // margin-top: 40px;
        // text-transform: uppercase;
        /* width: 150px; */
        // background-color: #4D85A6;



      },

      recomendedPostMessage:{
        textAlign:'center',
        fontFamily:"'Roboto Slab', serif",
        fontSize:'1rem',


       margin:'0 20px',
       color: '#FAF8F8',
      },
      href:{
        color:'#385092',
      },
    
      notUserComment :{
      
        // display:'flex',
        // flexDirection:'column',
        alignItems:'center',
        marginLeft:'120px',
        marginTop:'60px',
        fontSize:'35px',
        color:'#E7EDF1',

        [theme.breakpoints.down('sm')]: {
          marginLeft:'20px',
          fontSize:'25px'
        },


      

      
        // float:'right'
        // verticalAlign:'center',
        
// justifyContent:'space-between'
        
      }



  

}));



