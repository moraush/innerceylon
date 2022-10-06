import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    backgroundColor:'white',

    // margin:'80px 20px',
    // padding: theme.spacing(1),
    
    // borderRadius: 10,
   
    
    
    // alignItems:'center',
   
    [theme.breakpoints.down("xs")]: {
     
  },






  },


  formButtons: {
    marginTop: '5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },




  textfield: {
  
    
    //   textAlign: 'center' ,
    //   cursor:'center',
    
    // backgroundColor:'#E7EDF1',
    
  
  },

  centerText: {
    // textAlign: "center"            
  },

  form: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // position:'relative',
    
   
},
  fileInput: {
    // width: '97%',
    // margin: '10px 0',
  },
  buttonSubmit: {
    // backgroundColor:'#4C75A0',
    // margin: '30px 0',
    // width:'100%',
    // height:'4vw'
  },

  buttonClear: {
    // backgroundColor:'#F75841',
    // marginBottom: '10px',
    // width:'100%',
    // height:'3vw'
  },

}));


