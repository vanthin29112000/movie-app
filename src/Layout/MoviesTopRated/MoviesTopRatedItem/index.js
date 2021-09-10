import React, { Component } from "react";
import imageAPI from "../../../Services/images";

class MoviesTopRatedItem extends Component {
   render() {
      const { backdrop_path, original_title, overview } = this.props.movie;
      const bg_img = imageAPI.fetchImageURL(backdrop_path);
      return (
         <div
            className="movies-toprated"
            style={{ backgroundImage: `url(${bg_img})` }}
         >
            <div className="overview">
               <p className="name-movies">{original_title}</p>
               <p className="description">{overview}</p>
            </div>
         </div>
      );
   }
}
export default MoviesTopRatedItem;
