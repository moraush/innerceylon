import React, {useEffect , useState} from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/Postdetails";
import Admin from "./components/Admin/Admin";
import SearchCreate from "./components/SearchCreate/SearchCreate";
import Search from "./components/Search/Search";
import FormMain from "./components/FormMain/FormMain";
import TEST from "./components/FormMain/TEST/TEST";




const App = () => {

   


   

    const user = JSON.parse(localStorage.getItem("profile"))

    return(
        <BrowserRouter>
<div>
       {/* <Container xs={{ maxWidth:'100%'  }} maxWidth={false}> */}
       <Navbar />
       
           
           <Switch>
               <Route path="/" exact component={() => <Redirect to="/posts" />}/>
               <Route path="/posts" exact component={Home}/>
               <Route path="/posts/search" exact component={Home}/>
               <Route path="/posts/:id"  component={PostDetails}/>
               <Route path="/admin"  component={Admin}/>
               <Route path="/search"  component={Search}/>
               <Route path="/formMain"  component={FormMain}/>
               {/* <Route path="/test"  component={TEST}/> */}
               {/* <Route path="/searchCreate"  component={SearchCreate}/> */}


               <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect  to="/posts" />)}/>
           </Switch>
           
       {/* </Container>
        */}
        </div>
       </BrowserRouter>
    )
}

export default App;