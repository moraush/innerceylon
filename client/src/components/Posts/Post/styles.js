
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    
    position: 'relative',
    // overflow: 'hidden',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '60px',
    borderRadius: '6px',
     height: 300,

  
    //  boxShadow: '0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)'
    // paddingTop: '56.25%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    // cursor: 'pointer',
    // position:'relative',
    // marginLeft:"15px",
    // marginRight:"15px",
    // marginTop:'-30px',
    // opacity:'0.8',
    // transition:'opacity .1s linear',
    // '&:hover' : {opacity:1}
  },

  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
  
    borderRadius: '15px',
 
    // marginBottom: '30px',
    // border-radius: 6px;
    // color: rgba(0,0,0, 0.87);
    background: '#EEEFE7'
    // box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    
   
  },
  tags:{
    color:'#201F44',
    marginTop: '10px',
    // marginRight: '116px'
  },


  

  

  overlay: {
    width:'91%',
    position: 'absolute',
    // textAlign:'right',
    top: '10px',
    marginRight: '20px',
    marginLeft: '20px',
    

    
    // color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  title: {
    // padding: '0 16px',
    cursor: 'pointer',
    opacity:'0.8',
    transition:'opacity .3s linear',
    textAlign: 'center',
    '&:hover' : {opacity:1},
    textTransform: "uppercase",
    fontFamily: "verdana",
    fontSize: "2em",
    fontWeight: "700",
    color: "#385092",
    textShadow: "1px 1px 1px #919191,1px 2px 1px #919191, 1px 3px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)"
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },

 
});


//////////////////////////////////////////////////


