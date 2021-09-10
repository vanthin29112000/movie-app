import React, { Component } from "react";
import ListActor from "../../Layout/ListActor";
import MovieInfo from "../../Layout/MovieInfo";
import NavContent from "../../Layout/NavigationContent";
import actorAPI from "../../Services/Actor";
import MoviesAPI from "../../Services/TheMovies";

class MoviesDetail extends Component {
   constructor(props) {
      super(props);

      this.state = {
         movie: [],
         actor: [],
         crew: [],
         director: "",
      };
   }

   async componentDidMount() {
      window.scrollTo(0, 0);
      const reposeFetchInfo = await MoviesAPI.fetchMoviesInfo(
         this.props.match.params.movie_id
      );
      const responseFetchActor = await actorAPI.fetchActorInfo(
         this.props.match.params.movie_id
      );

      let director = responseFetchActor.data.crew.findIndex(
         (ele) => ele.job === "Director"
      );
      this.setState({
         movie: reposeFetchInfo.data,
         actor: responseFetchActor.data.cast,
         crew: responseFetchActor.data.crew,
         director: responseFetchActor.data.crew[director].name,
      });
   }

   render() {
      return (
         <div className="movie-detail">
            {/* navigation content */}
            <NavContent movie={this.state.movie}></NavContent>
            {/* movieinfobar */}
            <MovieInfo
               movie={this.state.movie}
               director={this.state.director}
            ></MovieInfo>
            {/* list actor */}
            <ListActor actors={this.state.actor}></ListActor>
         </div>
      );
   }
}
export default MoviesDetail;
