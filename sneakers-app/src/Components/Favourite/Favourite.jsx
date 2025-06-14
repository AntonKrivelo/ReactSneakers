import React from "react";
import './Favourite.scss';
import backIcon from '../../Icons/Favourite/back.svg';
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";
import "../../index.scss";
import { AppContext } from "../../App";

const Favourite = (onAddToFavourite) => {

    const {favouriteItems} = React.useContext(AppContext)

    return (
        <div className="favourite-page">
            <div className="favourite-page-header">
                <NavLink to='/'>
                    <img src={backIcon} alt="back-icon" />
                </NavLink>
                <h1 className="favourite-page-header-title">Мои закладки</h1>
            </div>
            
               {favouriteItems.length > 0 ? <div className="content-item-favourite"> 
                 {
                  favouriteItems
                  .map((item,index) => 
                  <Card key={index} id={item.id} imgUrl={item.imgUrl} name={item.name} price={item.price} favourited={true} />)
                } 
                </div> : <div className="favourite-empty">
                        <h2>На странице закладок кроссовок нет</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы добавить их в избранное</p>
                    </div>}
        </div>
    )
}

               
export default Favourite;