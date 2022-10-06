import {combineReducers} from "redux";

import posts from "./posts";
import auth from "./auth"
import rents from "./rents"


export default combineReducers({posts , auth , rents});
