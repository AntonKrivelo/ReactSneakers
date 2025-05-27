import React from "react";
import "./CartItem.scss";
import sneakersImg from "../../Img/imgSneakersCart.svg";
import deleteSneakers from "../../Icons/CartIcons/button-cart.svg";

const CartItem = () => {
    return (
        <div className="cart-item-block">
            <div>
                <img className="cart-item-block-img" src={sneakersImg} alt="imageSneakers" />
            </div>
            <div className="cart-item-block-info">
                <p className="cart-item-block-name">
                    Мужские Кроссовки Nike Air Max 270
                </p>
                <br />
                <p className="cart-item-block-price">
                    8 499 Rub.
                </p>
            </div>
            <div>
                <button className="cart-item-block-button">
                    <img className="cart-item-block-button-img" src={deleteSneakers} alt="button-delete-is-cart" />
                </button>
            </div>
        </div>
    )
}



export default CartItem;