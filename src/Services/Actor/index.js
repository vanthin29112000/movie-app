import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const APIKey = "054f4d1d16d1f9c4fe3cca181b268d3d";

const actorAPI = {
   fetchActorInfo: (movie_id) => {
      return axios.get(
         `${baseURL}/movie/${movie_id}/credits?api_key=${APIKey}`
      );
   },
};

export default actorAPI;
