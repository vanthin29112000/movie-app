import React, { Component } from "react";
import Carousel from "../../Components/Carousel";
import ListMovie from "../ListMovie";
import MovieItem from "../ListMovie/MovieItem";
import "./MoviesUpComing.css";
class MoviesCard extends Component {
   render() {
      const CarouselListMovies = Carousel(ListMovie);
      const { name } = this.props;
      return (
         <div className="listmovies">
            <div className="listmovies__title">
               <hr></hr>
               <h1>{name}</h1>
               <hr></hr>
            </div>
            <div className="listfilm">
               <CarouselListMovies
                  movies={this.props.movies}
                  className="carousel_moviesupcoming"
                  countSlide={Math.ceil(this.props.movies.length / 4)}
               ></CarouselListMovies>
            </div>
         </div>
      );
   }
}
export default MoviesCard;
