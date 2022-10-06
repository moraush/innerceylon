import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  appBar: {

 width:'100%',
    background: 'white',
    // boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
 
    flexDirection: 'row',
    justifyContent: 'space-between',
  // width :"90%",
    padding: '10px 10px',
    // alignItems:"center",
    
    [theme.breakpoints.down('xs')]: {
      // maxWidth:"100%",
    // padding: '10px 10px 10px 25px',
    margin: '0',
 
    },
  },



  heading: {
  
    color:'#484848',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: '300',
    fontFamily: "Lora, serif",
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5vw',
      },
   
  },
  image: {

    marginTop: '5px',
    [theme.breakpoints.down('sm')]: {
      width:'60px',
      height:'60px'
 
      },
  },


  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      flexDirection:'column',
    
    },
  },

  profileIn: {
    
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
   
   
    [theme.breakpoints.down('sm')]: {
      
      justifyContent: 'center',
    marginBottom:'10%',
    width: '20vw',


     
    },
  },


  logout: {
  
    color:'#FAF9F7',
    backgroundColor:'#4C75A0',
    padding:'5px 0px',
    fontSize:'10px',
  
    [theme.breakpoints.down('sm')]: {
      fontSize:'8px'
   
    }
  },
  signin: {
  
    color:'#FAF9F7',
    backgroundColor:'#ff5a5f',
    padding:'5px 0px',
    fontSize:'10px',
  
   
  },
  userName: {
    color:'#4C75A0',
    fontSize:'16px',
    fontFamily: "Lora, serif",

  
    [theme.breakpoints.down('sm')]: {
      fontSize:'8px'
   
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {

    marginRight:'10px',

    [theme.breakpoints.down('sm')]: {
      fontSize:'8px',
      width:'20px',
      height:'20px',
      marginRight:'10%'
   
    }
  
  },
}));