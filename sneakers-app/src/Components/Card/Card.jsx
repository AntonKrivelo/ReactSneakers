import React from "react";
import "./Card.scss";
import add from "../../Icons/CardIcon/add-button.svg";
import heartUnliked from "../../Icons/CardIcon/heart-unliked.svg";

const Card = ({item, imgUrl, clickInfo}) => {

    return (
        <div className="card-item">
            <button className="card-item-favourite">
                <img className="card-item-favourite-img" src={heartUnliked} alt="FavouriteIcon" />
            </button>
            <img className="card-item-img" src={imgUrl} alt="sneakers-img" />
            <p className="card-item-name">{item.name}</p>
            <div className="card-item-info">
                <div className="card-item-info-price">
                    <span className="card-item-info-price-title">Цена:</span>
                    <p className="card-item-price">{item.price} Rub.</p>
                </div>
                <button onClick={() => console.log(clickInfo)} className="card-item-add-button">
                    <img className="card-item-add-button-img" src={add} alt="added to card" />
                </button>
            </div>
        </div>
    )
}



export default Card;