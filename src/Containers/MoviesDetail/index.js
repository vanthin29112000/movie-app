import React, { Component } from "react";
import Loading from "../../Components/Loading";
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
         isShowLoading: true,
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

      let director_name =
         responseFetchActor.data.crew[director] &&
         responseFetchActor.data.crew[director].name;
      this.setState({
         movie: reposeFetchInfo.data,
         actor: responseFetchActor.data.cast,
         crew: responseFetchActor.data.crew,
         director: director_name,
         isShowLoading: false,
      });
   }

   render() {
      const { isShowLoading } = this.state;
      if (isShowLoading) {
         return <Loading></Loading>;
      }
      return (
         <div className="movie-detail">
            {/* navigation content */}
            <NavContent key_word={this.state.movie.original_title}></NavContent>
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
