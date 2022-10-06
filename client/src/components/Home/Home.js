import React, {useState,useRef} from 'react';
import Posts from '../Posts/Posts'
import Form from '../Form/Form';
import Pagination from '../Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Grow, Grid, Paper ,AppBar, TextField, Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getPosts, getPostsBySearch} from "../../actions/posts";
import useStyles from './styles'
import ChipInput from "material-ui-chip-input";
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
// import Test from './test';
import HeroMain from '../HeroMain/HeroMain';
import Search from '../Search/Search';

function useQuery () {
    return new URLSearchParams(useLocation().search)
}
 
const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    // const searchRef = useRef()


    const ref = useRef(null);

    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetMiddle)  
    // const scrollToRef = () => window.scrollTo(0, 850)   

  
    const searchPost = () => {
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
            // scrollToRef(searchRef)
        }else{
            history.push('/')
        }   
    }

    const handleKeyPress =(e) =>{
        if(e.keyCode === 13 ){
            searchPost()
        }
    }

    const handleAdd =(tag) => setTags([...tags , tag])
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) =>tag !== tagToDelete ))

    return(
    <>   
    {/* <Grow  in> */}
    {/* <div className={classes.hero}><Hero /> </div> */}
    <div className="main">
        {/* <Container   maxWidth = "l"> */}
        <div ><HeroMain 
        refToCreatePost={ref}
        
        /> 
     
        </div>

         
             <Grid  
             className={classes.gridContainer}>
                    {/* <Grid className={classes.search} item xs={12} sm={12} md={12}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField 
                    className={classes.innerSearch}
                    
                    name="search" 
                    variant="outlined"
                    label='Search Inner'
                    onKeyPress = {handleKeyPress}
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick = {searchPost} className={classes.searchButton} 
                    variant='contained'
                     color='primary'>Search</Button>

                    <ChipInput 
                    className={classes.innerSearch}
                    value={tags}
                    onAdd = {handleAdd}
                    fullWidth
                    onDelete = {handleDelete}
                    label = 'Search Tags'
                    variant = "outlined"
                    />
                    </AppBar>

                </Grid> */}
                <Grid className={classes.gridPosts} item xs={12} sm={12} md={12}>
               

{/* <Test/> */}

               <Posts 
            //    ref={searchRef} 
                 setCurrentId={setCurrentId}/>
              
               
               </Grid>
               <Grid item xs={12} sm={12} md={12}>
               {(!searchQuery && !tags.length) && (
                    //<Paper className={classes.pagination} elevation={6}>
                    <div>
                    <Pagination  page={page} />
                    </div>
                //</Paper>
                )}
                </Grid>

               {/* <Form ref={ref}  className={classes.gridCreate} currentId={currentId} setCurrentId={setCurrentId}/> */}



            </Grid>
            {/* <Footer /> */}
        {/* </Container> */}
        </div>
    {/* </Grow> */}

   
    </>
    )
}

export default Home;