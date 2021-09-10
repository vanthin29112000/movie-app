import React, { Component } from "react";
import "./NavContent.css";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

class NavContent extends Component {
   render() {
      return (
         <div className="navigation-content">
            <Link to="/">
               <p className="home">Home</p>
            </Link>

            <p className="name-movie">{this.props.movie.original_title}</p>
         </div>
      );
   }
}
export default NavContent;
