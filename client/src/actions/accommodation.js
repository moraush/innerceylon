import * as api from "../api";
import { CREATEACCOMMODATION, FETCH_POST,COMMENT ,FETCH_ALL,FETCH_BY_SEARCH ,START_LOADING, END_LOADING, DELETE, UPDATE,CREATE } from "../constants/actionTypes";




export const createAccommodation = (accommodation,history) => async(dispatch) => {

    console.log('cheking.........',accommodation)
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.createAccommodation(accommodation);
        dispatch({type: CREATEACCOMMODATION, payload:data});

        // history.push(`/posts/${data._id}`)

        dispatch({type: END_LOADING})

    } catch (error) {
        console.log(error);
    }
}