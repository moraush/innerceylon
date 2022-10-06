import React, {useState,useRef} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid ,AppBar, TextField, Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getPostsBySearch} from "../../actions/posts";
import useStyles from './styles'
import ChipInput from "material-ui-chip-input";



function useQuery () {
    return new URLSearchParams(useLocation().search)
}
 
const Search = () => {
    // const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    // const page = query.get("page") || 1;
    // const searchQuery = query.get("searchQuery");



    const ref = useRef(null); 

  
    const searchPost = () => {
        if(search.trim() || tags){
            dispatch(getPostsBySearch({search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
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
    <div className={classes.main}>

         
             <Grid     
             className={classes.gridContainer}>
                    <Grid className={classes.search} item xs={12} sm={12} md={12}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField 
                    className={classes.innerSearch}

                    name="search" 
                    variant="outlined"
                    label='place...'
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
                    label = 'Tags...'
                    variant = "outlined"
                    />
                    
                    </AppBar>

                </Grid>
     
            </Grid>
      
        </div>


   
    </>
    )
}

export default Search;