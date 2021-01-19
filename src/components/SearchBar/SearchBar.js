// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {

const {searchTerm, setSearchTerm, posts}=props;

const onSearchChange=function(event){
  setSearchTerm(event.target.value);
}

const onSearchSubmit=function(event){
 return posts.filter(function(post){
    if (post.username===searchTerm){
      return post;
    } else {
      return null;
    }
  })
}


  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form" onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={onSearchChange}
          value={searchTerm}
          onSubmit={onSearchSubmit}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
