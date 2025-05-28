import React from "react";
import icon from '../../Icons/logo.svg';
import iconCart from '../../Icons/CartIcon.svg';
import iconFavourite from '../../Icons/FavouriteIcon.svg';
import iconProfile from '../../Icons/profileIcon.svg';
import './Header.scss';

const Header = ({openOnClickCart}) => {
    return(
        <header className="header">
            <div className="header-main">
              <img className="header-main-logo" src={icon} alt="logoIcon" />
              <div className="header-main-info">
                <h3 className="header-main-title">Shop Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
            <ul className="header-main-buttons">
              <li onClick={openOnClickCart}>
                <img className="header-main-buttons-icon" src={iconCart} alt="cartIcon" />
                <span>1205 Rub.</span>
              </li>
              <li>
                <img className="header-main-buttons-icon" src={iconFavourite} alt="favouriteIcon" />
                <span>Закладки</span>
              </li>
              <li>
                <img className="header-main-buttons-icon" src={iconProfile} alt="profileIcon" />
                <span>Профиль</span>
              </li>
            </ul>
        </header>
    )
}

export default Header;