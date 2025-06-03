import React from "react";
import "./CartItem.scss";
import deleteSneakers from "../../Icons/CartIcons/button-cart.svg";


const CartItem = ({obj, removeCartItem}) => {
    return (
        <div className="cart-item-block">
                <img className="cart-item-block-img" src={obj.imgUrl} alt="imageSneakers" /> 
            <div className="cart-item-block-info">
                <p className="cart-item-block-name">
                    {obj.name}
                </p>
                <br />
                <p className="cart-item-block-price">
                    {obj.price}Rub.
                </p>
            </div>
            <div>
                <button onClick={() => removeCartItem(CartItem.id)} className="cart-item-block-button">
                    <img className="cart-item-block-button-img" src={deleteSneakers} alt="button-delete-is-cart" />
                </button>
            </div>
        </div>
    )
}



export default CartItem;