import React from "react";
import "./SearchBlock.scss";
import searchIcon from "../../Icons/search.svg";
import clearIcon from "../../Icons/CartIcons/button-cart.svg";

const SearchBlock = ({onChangeValue, searchValue, clearValue, value}) => {
    return (
        <div className="search-block">
            <img className="search-block-icon" src={searchIcon} alt="search-icon" />
            <input onChange={onChangeValue} value={value} className="search-block-input" placeholder="Поиск ..."/>
            {searchValue ? <img onClick={clearValue} className="search-block-clear" src={clearIcon} alt="clear-icon"></img> : ''}
        </div>
    )
}


export default SearchBlock;