
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  // heroContainer:{
  //   marginTop:'2rem',
  //   marginBottom:'2rem'

  // },
  gridContainer: {
    marginTop:'1000px',
    // position :'relative',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
}));