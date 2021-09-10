import React, { Component } from "react";
import MovieItem from "./MovieItem";

class ListMovie extends Component {
   render() {
      return (
         <>
            {this.props.movies.map((ele, index) => (
               <MovieItem movie={ele} key={index}></MovieItem>
            ))}
         </>
      );
   }
}
export default ListMovie;
