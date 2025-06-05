import React from "react";
import './Favourite.scss';
import backIcon from '../../Icons/Favourite/back.svg';
import { NavLink } from "react-router-dom";

const Favourite = () => {
    return (
        <div className="favourite-page">
            <div className="favourite-page-header">
                <NavLink to='/'>
                    <img src={backIcon} alt="back-icon" />
                </NavLink>
                <h1 className="favourite-page-header-title">Мои закладки</h1>
            </div>
            <div>
                
            </div>
        </div>
    )
}


export default Favourite;