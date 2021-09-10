import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import imageAPI from "../../../Services/images";
import "./MovieItem.css";
const MovieItem = (props) => {
   const {
      poster_path,
      vote_average,
      release_date,
      original_language,
      original_title,
      adult,
      id,
   } = props.movie;

   const img = imageAPI.fetchImageURL(poster_path);
   const history = useHistory();
   const onLinkToMovieDetail = (movie_id) => {
      history.push(`/movie/${movie_id}`);
   };

   return (
      <div className="movie-item" onClick={() => onLinkToMovieDetail(id)}>
         <div className="infomation">
            <img src={img}></img>
            <p>{vote_average}</p>
         </div>
         <div className="title">
            {!adult ? <span>P</span> : <h2>{adult}</h2>}
            <p>{original_title}</p>
         </div>
         <div className="infofilm">
            <p>Language: {original_language}</p>
            <p>{release_date}</p>
         </div>
      </div>
   );
};
export default MovieItem;
