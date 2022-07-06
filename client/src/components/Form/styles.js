import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    // border:'1px solid white',
    
    borderRadius: 10,
    backgroundColor:'#F2F1F3',
    
    marginTop:'20px',
    // marginLeft:'45px',
    width:"100%",
    padding: '16px',
    alignItems:'center',
   
    // color:'white',
    // background:'#FFF8DC',
    [theme.breakpoints.down("xs")]: {
      position:'relative',
      width:'100%',
      // marginLeft:'6px'
      
  },



//   [theme.breakpoints.down("md")]: {
//     position:'relative',
//     width:'90%',
//     marginLeft:'6px'
    
// },


  },

  textfield:{
    // color:'white'
    border:'1px solid white',
    backgroundColor:'#E7EDF1'
    // marginBottom:'20px'
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position:'relative',
    // color:'white'
    
   
},
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));



// const theme = {
//   ...defaultTheme,
//   overrides: {
//     MuiTypography: {
//       h1: {
//         fontSize: "5rem",
//         [breakpoints.down("xs")]: {
//           fontSize: "3rem"
//         }
//       }
//     }
//   }
// }