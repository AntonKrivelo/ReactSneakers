import React,{useState} from "react";
import "./Card.scss";
import add from "../../Icons/CardIcon/add-button.svg";
import added from "../../Icons/CardIcon/added-button.svg"
import heartUnliked from "../../Icons/CardIcon/heart-unliked.svg";



const Card = ({item, name, price, imgUrl, onAddToCart}) => {

    const [isAdded, setIsAdded] = useState(false);
    
    const handleAdded = () => {
        onAddToCart({imgUrl, name, price})
        setIsAdded(!isAdded)
    }

    return (
        <div className="card-item">
            <button className="card-item-favourite">
                <img className="card-item-favourite-img" src={heartUnliked} alt="FavouriteIcon" />
            </button>
            <img className="card-item-img" src={imgUrl} alt="sneakers-img" />
            <p className="card-item-name">{name}</p>
            <div className="card-item-info">
                <div className="card-item-info-price">
                    <span className="card-item-info-price-title">Цена:</span>
                    <p className="card-item-price">{price} Rub.</p>
                </div>
                <button onClick={handleAdded} className="card-item-add-button">
                    <img className="card-item-add-button-img" src={!isAdded ? `${add}` : `${added}`} alt="icon-added-to-card"  />
                </button>
            </div>
        </div>
    )
}



export default Card;