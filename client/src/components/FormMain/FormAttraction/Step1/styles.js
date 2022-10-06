import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin:'80px 20px',
    padding: theme.spacing(1),
    // border:'1px solid white',
    
    borderRadius: 10,
    // backgroundColor:'#7B9B9E',
    // width:'100%',
   
    
    // marginTop:'20px',
    // marginLeft:'45px',
    // width:"10%",
    
    // padding: '16px',
    alignItems:'center',
   
    // color:'white',
    // background:'#FFF8DC',
    [theme.breakpoints.down("xs")]: {
      // position:'relative',
      // width:'100%',
      // marginLeft:'6px'
      
  },



//   [theme.breakpoints.down("md")]: {
//     position:'relative',
//     width:'90%',
//     marginLeft:'6px'
    
// },


  },


//   textBox: {
//     "& $div": {
//          justifyContent: "center",
//         "& $input": {
//            width: "30%"
//          }
//       },
//     "& $p": {
//        alignSelf: "center"
//     }
//  },

  textfield: {
  
    
      textAlign: 'center' ,
      cursor:'center',
    
    // color:'white'
    // border:'1px solid white',
    backgroundColor:'#E7EDF1',
    
      // textAlign:'center'
  
    // height:'20vw'
    // marginBottom:'20px'
  },

  centerText: {
    textAlign: "center"            
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
    backgroundColor:'#4C75A0',
    margin: '30px 0',
    width:'100%',
    height:'4vw'
  },

  buttonClear: {
    backgroundColor:'#F75841',
    marginBottom: '10px',
    width:'100%',
    height:'3vw'
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