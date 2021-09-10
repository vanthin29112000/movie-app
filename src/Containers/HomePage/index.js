import React, { Component } from "react";
import Carousel from "../../Components/Carousel";
import MoviesTopRated from "../../Layout/MoviesTopRated";
import MoviesCard from "../../Layout/MoviesUpComing";
import MoviesAPI from "../../Services/TheMovies";
import "./HomePage.css";

class HomePage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         moviesPopular: [],
         moviesTopRated: [],
         moviesUpComing: [],
      };
   }

   async componentDidMount() {
      const reponseMoviesPopular = await MoviesAPI.fetchMoviesPopular();
      const reponseMoviesTopRates = await MoviesAPI.fetchMoviesTopRated();
      const reponseMoviesUpComing = await MoviesAPI.fetchMoviesUpComing();
      this.setState({
         moviesPopular: reponseMoviesPopular.data.results,
         moviesTopRated: reponseMoviesTopRates.data.results,
         moviesUpComing: reponseMoviesUpComing.data.results,
      });
   }

   render() {
      const CarouselBaner = Carousel(MoviesTopRated);
      return (
         <div className="homepage">
            <div className="homepage__carousel">
               <CarouselBaner
                  movies={this.state.moviesTopRated}
                  countSlide={this.state.moviesTopRated.length}
               ></CarouselBaner>
            </div>
            <div className="themovies">
               <div className="themovies__bg">
                  <MoviesCard
                     movies={this.state.moviesUpComing}
                     countSlide={this.state.moviesUpComing.length}
                     name="Up Coming"
                  ></MoviesCard>
                  <MoviesCard
                     movies={this.state.moviesPopular}
                     countSlide={this.state.moviesPopular.length}
                     name="Movies Popular"
                  ></MoviesCard>
               </div>
            </div>
         </div>
      );
   }
}
export default HomePage;
