//import { Switch } from "@material-ui/core";
import { COMMENT,FETCH_BY_SEARCH,FETCH_ALL,FETCH_POST, START_LOADING, END_LOADING,DELETE, UPDATE,CREATE } from "../constants/actionTypes";


const reducerPosts = (state = {isLoading:true, posts:[]}, action) => {
    switch (action.type ) {

        case START_LOADING:
            return{...state, isLoading:true};

            case END_LOADING:
            return{...state, isLoading:false};



        case FETCH_ALL:
        return {
            ...state,
            posts: action.payload.data,
            currentPage: action.payload.currentPage,
            numberOfPages: action.payload.numberOfPages,

        };

        case FETCH_BY_SEARCH :
            return {
                ...state, posts:action.payload
            };

            case FETCH_POST :
            return {
                ...state, post:action.payload
            };

            case CREATE:
            return {...state, posts:[...state.posts, action.payload]};


            case UPDATE: 
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload: post)};


            case COMMENT:
                return { 
                    ...state,
                    posts: state.posts.map((post) => {
                        if(post._id === action.payload._id){
                            return action.payload;
                        }

                        return post;
                    })


                };

            case DELETE:
            return {...state,posts: state.posts.filter((post) => post._id !== action.payload)};


            default:
            return state;








        // case FETCH_ALL:
        // return action.payload;

        // case DELETE:
        //     return posts.filter((post) => post._id !== action.payload)
        // case UPDATE: 
        //     return posts.map((post) => post._id === action.payload._id ? action.payload: post);
        


        // case CREATE:
        //     return [...posts, action.payload];

        // case FETCH_BY_SEARCH :
        //     return action.payload;

            
           
    
        
    }
}

export default reducerPosts;