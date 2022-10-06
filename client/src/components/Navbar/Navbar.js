import React, { useState ,useEffect} from 'react';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@material-ui/core';
import useStyles from './styles'
import innerceylonlogo from '../../images/1.jpeg';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory ,useLocation} from 'react-router-dom';
import decode from "jwt-decode";
import Menu from './Menu/Menu'
// import "./styles.css"

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {

        const token = user?.token;

        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))


    },[location])

    const logout = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/');
        setUser(null)

    }

    return (
        
             <AppBar className= {classes.appBar}  color="inherit">
                 <Menu/>
                 <div className = {classes.brandContainer}>
                 
               <Typography component={Link} to='/' className ={classes.heading} variant ="h2" align ="center">InnerCeylon</Typography>
  <img  className ={classes.image} src ={innerceylonlogo} alt =" innerceylon Logo" height="60" />
               </div >

                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <div className={classes.profileIn}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                            </div>
                        <Button 
                        variant= "contained"
                         className={classes.logout} onClick={logout}>logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant='contained' className={classes.signin}>Sign In</Button>
                    )}
                </Toolbar>
           </AppBar>
       
    )
}

export default Navbar;