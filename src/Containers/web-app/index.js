import React, { Component } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import NavBar from "../../Layout/NavBar";
import HomePage from "../HomePage";
import ListMovieSearch from "../ListMovieSearch";
import MoviesDetail from "../MoviesDetail";
class WebApp extends Component {
   render() {
      return (
         <BrowserRouter>
            <NavBar></NavBar>

            <Switch>
               <Route path="/" component={HomePage} exact></Route>
               <Route
                  path="/search/:key_word"
                  component={ListMovieSearch}
               ></Route>
               <Route path="/movie/:movie_id" component={MoviesDetail}></Route>
            </Switch>
         </BrowserRouter>
      );
   }
}
export default WebApp;
