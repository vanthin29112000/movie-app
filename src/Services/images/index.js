const baseURL = "https://image.tmdb.org/t/p/w500/";

const imageAPI = {
   fetchImageURL: (img) => {
      return `${baseURL}${img}`;
   },
};

export default imageAPI;
