import React from "react";
import "./SearchBlock.scss";
import searchIcon from "../../Icons/search.svg";


const SearchBlock = () => {
    return (
        <div className="search-block">
            <img className="search-block-icon" src={searchIcon} alt="search-icon" />
            <input className="search-block-input" placeholder="Поиск ..."/>
        </div>
    )
}


export default SearchBlock;