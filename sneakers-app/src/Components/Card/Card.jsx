import React from "react";
import "./Card.scss";
import add from "../../Icons/CardIcon/add-button.svg";
import img from "../../Img/img1.svg";
import heartUnliked from "../../Icons/CardIcon/heart-unliked.svg";

const Card = () => {
    return (
        <div className="card-item">
            <button className="card-item-favourite">
                <img className="card-item-favourite-img" src={heartUnliked} alt="FavouriteIcon" />
            </button>
            <img className="card-item-img" src={img} alt="kross" />
            <p className="card-item-name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-item-info">
                <div className="card-item-info-price">
                    <span className="card-item-info-price-title">Цена:</span>
                    <p className="card-item-price">12 999 Rub.</p>
                </div>
                <button className="card-item-add-button">
                    <img className="card-item-add-button-img" src={add} alt="added to card" />
                </button>
            </div>
        </div>
    )
}



export default Card;