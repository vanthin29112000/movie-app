const baseURL = "https://image.tmdb.org/t/p/w500/";
const imgDefault = "/images/istockphoto-1193057179-612x612.jpg";
const imageAPI = {
   fetchImageURL: (img) => {
      if (img == null) {
         return imgDefault;
      }
      return `${baseURL}${img}`;
   },
};

export default imageAPI;
