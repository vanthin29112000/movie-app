import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const APIKey = "054f4d1d16d1f9c4fe3cca181b268d3d";

const MoviesAPI = {
   fetchMoviesPopular: () => {
      return axios.get(`${baseURL}/movie/popular?api_key=${APIKey}`);
   },
   fetchMoviesUpComing: () => {
      return axios.get(`${baseURL}/movie/upcoming?api_key=${APIKey}`);
   },
   fetchMoviesTopRated: () => {
      return axios.get(`${baseURL}/movie/top_rated?api_key=${APIKey}`);
   },
   fetchMoviesInfo: (movie_id) => {
      return axios.get(`${baseURL}/movie/${movie_id}?api_key=${APIKey}`);
   },
   fetchSearchMovies: (key_word, page) => {
      return axios.get(
         `${baseURL}/search/movie?query=${key_word}&page=${page}&api_key=${APIKey}`
      );
   },
};

export default MoviesAPI;
