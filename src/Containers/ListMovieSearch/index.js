import React, { Component } from "react";
import Loading from "../../Components/Loading";
import MovieItem from "../../Layout/ListMovie/MovieItem";
import NavContent from "../../Layout/NavigationContent";
import MoviesAPI from "../../Services/TheMovies";
import "./ListMovieSearch.css";

class ListMovieSearch extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
         key_word: "",
         page_now: 0,
         total_page: 0,
         isShowButtonMore: true,
         isShowLoading: true,
      };
   }

   componentDidMount() {
      this.onFetchSearchMovies(1);
   }

   componentDidUpdate(prevProps, prevState) {
      const prev = prevProps.match.params.key_word;
      const now = this.props.match.params.key_word;
      if (prev !== now) {
         this.setState({
            movies: [],
            isShowLoading: true,
         });
         this.onFetchSearchMovies(1);
      }
   }

   onChangePage = () => {
      const page = this.state.page_now++;

      if (page <= this.state.total_page) {
         this.setState({
            page_now: page,
         });
         if (this.state.page_now === this.state.total_page) {
            this.setState({
               isShowButtonMore: false,
            });
         }

         this.onFetchSearchMovies(this.state.page_now);
      }
   };

   onFetchSearchMovies = async (page) => {
      const key_word = this.props.match.params.key_word;
      const response = await MoviesAPI.fetchSearchMovies(key_word, page);

      this.setState({
         movies: [...this.state.movies, ...response.data.results],
         key_word: key_word,
         total_page: response.data.total_pages,
         page_now: page,
         isShowLoading: false,
      });
   };

   render() {
      const { key_word, movies, isShowLoading } = this.state;
      if (isShowLoading) {
         return <Loading></Loading>;
      }
      return (
         <div className="ListMovieSearch">
            <NavContent key_word={key_word}></NavContent>
            {movies.length !== 0 ? (
               <div className="ListMovieSearch_bg">
                  {movies.map((ele, index) => (
                     <MovieItem movie={ele} key={index}></MovieItem>
                  ))}
                  {this.state.isShowButtonMore ? (
                     <button className="btn_more" onClick={this.onChangePage}>
                        Load More <i className="fas fa-chevron-right"></i>
                     </button>
                  ) : null}
               </div>
            ) : (
               <p className="ListMovieSearch__notify">No results were found</p>
            )}

            <div className="footer"></div>
         </div>
      );
   }
}
export default ListMovieSearch;
