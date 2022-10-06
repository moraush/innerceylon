
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  // main: {
  //   zIndex: 1

  // },

  appBarSearch: {
    borderRadius: 4,
    // backgroundColor:'#E7EDF1',
    backgroundColor:'rgba(0,0,0 ,0)',
    marginTop: '1rem',
 
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-arround',
    alignItems:'center',
    // textAlign:'center'
 
  },

   innerSearch:{
margin:'10px 10px',
borderRadius: 4,
// backgroundColor:'#F48B41',
color:'white',
// textAlign:'center'


  },



  searchButton:{
 
backgroundColor:'#4C75A0',
padding:'5px 25px',
fontSize:'12px'
  },


  search:{
    // textAlign:'center',
    position:'absolute',
    marginTop:'20px',
[theme.breakpoints.down("xs")]: {
  width:'100%',


  
},

},


  

  gridPosts:{
marginTop:'10px',
[theme.breakpoints.down("xs")]: {
  position:'relative',

  marginTop:'10px'
  
},

  },





}));