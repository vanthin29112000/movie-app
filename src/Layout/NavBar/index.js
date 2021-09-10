import React, { Component } from "react";
import Search from "../../Components/Search";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
   render() {
      return (
         <div className="nav-bar">
            <Link to="/">
               <div className="nav-bar__logo">
                  <i className="fas fa-film"></i>
                  <p>Movie Studio</p>
               </div>
            </Link>

            <div className="nav-bar__option">
               <Search baseURL={"/search"}></Search>
               <p>Login</p>
               <p>Sign in</p>
            </div>
         </div>
      );
   }
}
export default NavBar;
