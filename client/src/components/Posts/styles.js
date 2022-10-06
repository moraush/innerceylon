import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop:'10px'
  },

  postHome: {
    // margin:'3px'
  },



  postHome:{
    margin:'50px',
    [theme.breakpoints.down("xs")]: {
      position:'relative',
      // width:'90%',
      // marginTop:'10px'
      
    },
    // position:'absolute'
      },
  // smMargin: {
  //   margin: theme.spacing(1),
  // },
  // actionDiv: {
  //   textAlign: 'center',
  // },
}));