import React from "react";
import "./Drawer.scss";
import CartItem from "../CartItem/CartItem";
import removeCart from "../../Icons/CartIcons/button-cart.svg";
import vector from "../../Icons/vector.svg";

const Drawer = ({openOnClickCart, closeOverlayCart}) => {
    return (
        <div onClick={closeOverlayCart} className="drawer-overlay">
            <div className="drawer-block">
                <h2 className="drawer-block-title">Корзина</h2>
                    <img onClick={openOnClickCart} className="drawer-block-close-cart" src={removeCart} alt="iconRemoveCart" />
                <div className="drawer-block-items">
                    <CartItem />
                    <CartItem />
                </div>
                <div className="drawer-block-buy">
                    <div className="drawer-block-buy-total">
                        <p>Итого:</p>
                        <span>21 498 Rub.</span>
                    </div>
                    <div className="drawer-block-buy-tax">
                        <p>Налог 5%:</p>
                        <span>1074 Rub.</span>
                    </div>
                    <div>
                        <button className="drawer-block-buy-btn">Оформить заказ
                            <img src={vector} alt="vector-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Drawer;