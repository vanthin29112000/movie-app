import React, { Component } from "react";
import MoviesTopRatedItem from "./MoviesTopRatedItem";
import "./MoviesTopRated.css";
class MoviesTopRated extends Component {
   render() {
      const { movies } = this.props;
      return (
         <>
            {movies.map((ele, index) => (
               <MoviesTopRatedItem movie={ele} key={index}></MoviesTopRatedItem>
            ))}
         </>
      );
   }
}
export default MoviesTopRated;
