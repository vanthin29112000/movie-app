import React, { Component } from "react";
import imageAPI from "../../Services/images";
import "./MovieInfo.css";
class MovieInfo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name_direction: "",
      };
   }
   onChangeStringToPrice = (cod_string) => {
      const formatter = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
         minimumFractionDigits: 0,
      });
      return formatter.format(cod_string);
   };

   render() {
      const {
         poster_path,
         backdrop_path,
         original_title,
         overview,
         runtime,
         budget,
         revenue,
         release_date,
         vote_average,
      } = this.props.movie;
      const bg_img = imageAPI.fetchImageURL(backdrop_path);
      const poster_img = imageAPI.fetchImageURL(poster_path);

      return (
         <div
            className="movie-info"
            style={{ backgroundImage: `url(${bg_img})` }}
         >
            <div className="movie-info__content">
               <img src={poster_img} alt="poster" className="poster"></img>
               <div className="text">
                  <p className="name-movie">{original_title}</p>
                  <p className="plot">Overview: {overview} </p>
                  <div className="rate-director">
                     <div className="rate">
                        <h3>IMDb Rating</h3>
                        <p>{vote_average}</p>
                     </div>
                     <div className="director">
                        <h3>Director</h3>
                        <p>{this.props.director}</p>
                     </div>
                     <div className="release-date">
                        <h3>Release Date</h3>
                        <p>{release_date}</p>
                     </div>
                  </div>

                  <div className="movie-info-bar__content">
                     <div className="running-time">
                        <i className="far fa-clock"></i>
                        <p>{runtime} min</p>
                     </div>
                     <div className="budget">
                        <i className="far fa-money-bill-alt"></i>
                        <p>Budget {this.onChangeStringToPrice(budget)}</p>
                     </div>

                     <div className="revenue">
                        <i className="fas fa-ticket-alt"></i>
                        <p>Revenue {this.onChangeStringToPrice(revenue)}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default MovieInfo;
