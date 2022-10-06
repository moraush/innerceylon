
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    // backgroundColor:'yellow',
    borderRadius: 4,
    backgroundColor:'#E7EDF1',
    marginTop: '6rem',
    // width:'100%',
 
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
 
  },

   innerSearch:{
margin:'10px 10px',
borderRadius: 4,
backgroundColor:'#93ABC4',
color:'white'


  },



 

  // gridCreate:{
  //   background:'white',
  //   position:'relative',
  //   borderRadius: '4%',
  //   color:'white'
  //   // position:'relative'
  // },

  gridHome:{

    // marginTop:'200px'
//  width:'100%'
  },

  searchButton:{
    // color:'black',
backgroundColor:'#385092'
  },




  search:{
    margin:' 0 20px',
    // width:'100%',
    // float:'right',

    // margin:'20px',
    // display:"flex",   
    // flexDirection:'column',
    // justifyContent:'space-between', 
    // position:'relative',
    // width:'1000px',
    // backgroundColor:'yellow',
[theme.breakpoints.down("xs")]: {
  // position:'relative',
  // width:'100%',
  // marginTop:'160px',

  
},

},

// containerHero:{
//   marginTop:'30px',
// backgroundColor:'white'
// },

  

  gridPosts:{
marginTop:'10px',
[theme.breakpoints.down("xs")]: {
  position:'relative',
  // width:'90%',
  marginTop:'10px'
  
},
// position:'absolute'
  },


  hero:{
    // marginBottom:'1000px',
    // minHeight:'105vh',
    // maxWidth: '100%',
    // minHeight: '100%',
    // position: 'fixed',
    top: '0',
    left:'0',
    zIndex: -1,
   


    opacity:'0.6'
  },
  pagination: {
    background:'white',
    borderRadius: 4,
    // marginTop: '1rem',
    padding: '16px 16px',
    margin:'0 20px'
    // width:'100%'
  },
  // heroContainer:{
  //   marginTop:'2rem',
  //   marginBottom:'2rem'

  // },
  gridContainer: {
// backgroundColor:'yellow',

    // marginTop:'60rem',
    position :'relative',
    [theme.breakpoints.down('xs')]: {
       flexDirection: 'column',
       position :'relative',

      
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      position :'relative',
      
    },
  },
}));