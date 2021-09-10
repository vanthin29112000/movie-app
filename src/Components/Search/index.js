import React, { useState } from "react";
import "./Search.css";
import { useHistory } from "react-router";

const Search = (props) => {
   const [isShowInput, setShowInput] = useState(false);
   const [searchKey, setSearchKey] = useState("");
   const { baseURL } = props;

   const onChangeIsShowInput = () => {
      setShowInput(!isShowInput);
   };

   const onChangeSearchKey = (e) => {
      const { value } = e.target;
      setSearchKey(value);
   };

   const history = useHistory();
   const onSubmitChange = (e) => {
      e.preventDefault();
      // onChangeIsShowInput(isShowInput);
      if (searchKey === "") {
         alert("Please Enter Moives ");
      } else {
         setSearchKey("");
         history.push(`${baseURL}/${searchKey}`);
      }
   };

   return (
      <form className="nav-bar__search" onSubmit={onSubmitChange}>
         {isShowInput ? (
            <>
               <input
                  type="text"
                  placeholder="Enter name movie ..."
                  onChange={onChangeSearchKey}
                  value={searchKey}
               ></input>
               <button type="submit">
                  <i type="submit" className="fas fa-search"></i>
               </button>
            </>
         ) : (
            <i className="fas fa-search" onClick={onChangeIsShowInput}></i>
         )}
      </form>
   );
};
export default Search;
