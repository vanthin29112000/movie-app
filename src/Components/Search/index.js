import React, { Component } from "react";
import "./Search.css";
import PropTypes from "prop-types";

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchKey: "",
         isShowInput: false,
      };
   }

   onChangeIsShowInput = (isShow) => {
      this.setState({
         isShowInput: !isShow,
      });
   };

   onChangeSearchKey = (e) => {
      const { value } = e.target;
      this.setState({
         searchKey: value,
      });
   };

   onSubmitChange = (e) => {
      e.preventDefault();
      this.onChangeIsShowInput(this.state.isShowInput);
      this.props.onEventClick(this.state.searchKey);

      this.setState({
         searchKey: "",
      });
   };

   render() {
      return (
         <form className="nav-bar__search">
            {this.state.isShowInput ? (
               <>
                  <input
                     type="text"
                     placeholder="Enter name movie ..."
                     onChange={this.onChangeSearchKey}
                     value={this.state.searchKey}
                  ></input>
                  <button type="submit" onClick={this.onSubmitChange}>
                     <i type="submit" className="fas fa-search"></i>
                  </button>
               </>
            ) : (
               <i
                  className="fas fa-search"
                  onClick={() =>
                     this.onChangeIsShowInput(this.state.isShowInput)
                  }
               ></i>
            )}
         </form>
      );
   }
}

Search.defaultProps = {
   onEventClick: (ele) => {
      console.log("please Enter");
   },
};

Search.propType = {
   onEventClick: PropTypes.func,
};

export default Search;
