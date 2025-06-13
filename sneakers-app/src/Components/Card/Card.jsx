import React,{useState} from "react";
import "./Card.scss";
import add from "../../Icons/CardIcon/add-button.svg";
import addedItem from "../../Icons/CardIcon/added-button.svg"
import heartUnliked from "../../Icons/CardIcon/heart-unliked.svg";
import heartLiked from "../../Icons/CardIcon/heart-liked.svg";
import ContentLoader from "react-content-loader"



const Card = ({id, item, name, price, imgUrl, onAddToCart, loading = false, onAddToFavourite, favourited = false, added = false}) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavourite, setIsFavourite] = useState(favourited);
    
    const handleAdded = () => {
        onAddToCart({id, imgUrl, name, price})
        setIsAdded(!isAdded)
    }

    const handleFavourite = () => {
        onAddToFavourite({id, imgUrl, name, price})
        setIsFavourite(!isFavourite)
    }

    return (
        <div className="card-item">
        {
            loading ? <ContentLoader 
            speed={2}
            width={250}
            height={260}
            viewBox="0 0 250 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="13" y="17" rx="22" ry="22" width="225" height="140" /> 
            <rect x="279" y="327" rx="0" ry="0" width="3" height="3" /> 
            <rect x="16" y="174" rx="3" ry="3" width="226" height="25" /> 
            <rect x="15" y="216" rx="2" ry="2" width="124" height="32" /> 
            <rect x="198" y="214" rx="2" ry="2" width="44" height="33" />
            </ContentLoader> : <>
                <button onClick={() => handleFavourite(item)} className="card-item-favourite">
                    <img className="card-item-favourite-img" src={!isFavourite ? `${heartUnliked}` : `${heartLiked}`} alt="FavouriteIcon" />
                </button>
                <img className="card-item-img" src={imgUrl} alt="sneakers-img" />
                <p className="card-item-name">{name}</p>
                <div className="card-item-info">
                    <div className="card-item-info-price">
                        <span className="card-item-info-price-title">Цена:</span>
                        <p className="card-item-price">{price} Rub.</p>
                    </div>
                    <button onClick={() => handleAdded(item)} className="card-item-add-button">
                        <img className="card-item-add-button-img" src={!isAdded ? `${add}` : `${addedItem}`} alt="icon-added-to-card"  />
                    </button>
                </div>
            </>
        }
        </div>
    )
}


export default Card;