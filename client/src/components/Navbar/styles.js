import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    
    // F3EED4
    background: '#6e94db',
    boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // backgroundImage: 'linear-gradient(90deg, #b38459 0%, #bbc28d 100%)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    // color: theme.palette.primary.main,
    color:'#FAF8F8',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: '300',
    // cursor:'pointer'
  },
  image: {
    marginLeft: '10px',
    // color:'black',
    // position:'absolute',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    color:'#FAF9F7',
    backgroundColor:'#5289B6'
  },
  userName: {
    color:'#FAF8F8',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: 'theme.palette.getContrastText(deepPurple[500])',
    backgroundColor: deepPurple[500],
  },
}));