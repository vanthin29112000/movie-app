import React, { Component } from "react";
import "./NavContent.css";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

class NavContent extends Component {
   render() {
      const { key_word } = this.props;
      return (
         <div className="navigation-content">
            <Link to="/">
               <p className="home">Home</p>
            </Link>

            <p className="name-movie">{key_word}</p>
         </div>
      );
   }
}
export default NavContent;
