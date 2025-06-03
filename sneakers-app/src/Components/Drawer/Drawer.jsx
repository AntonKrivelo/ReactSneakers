import React from "react";
import "./Drawer.scss";
import CartItem from "../CartItem/CartItem";
import removeCart from "../../Icons/CartIcons/button-cart.svg";
import vector from "../../Icons/vector.svg";
import cartEmptyIcon from "../../Icons/CartIcons/cart-empty.svg";

const Drawer = ({openOnClickCart, closeOverlayCart, cartItems = [], removeCartItem}) => {
    return (
        <div onClick={closeOverlayCart} className="drawer-overlay">
            <div className="drawer-block">
                <h2 className="drawer-block-title">Корзина</h2>
                    <img onClick={openOnClickCart} className="drawer-block-close-cart" src={removeCart} alt="iconRemoveCart" />
                
                    {
                        cartItems.length > 0 ? <div className="drawer-block-items">
                    {
                        cartItems.map((obj) => (
                            <CartItem removeCartItem={removeCartItem} obj={obj} />
                        ))
                    }
                     <div className="drawer-block-buy">
                        <div className="drawer-block-buy-total">
                            <p>Итого:</p>
                            <span>0 Rub.</span>
                        </div>
                    <div className="drawer-block-buy-tax">
                        <p>Налог 5%:</p>
                        <span>0 Rub.</span>
                    </div>
                    <div>
                        <button className="drawer-block-buy-btn">Оформить заказ
                            <img src={vector} alt="vector-icon" />
                        </button>
                    </div>
                    </div>
                    </div> : <div className="cart-empty">
                        <img src={cartEmptyIcon} alt="cart-empty-icon" />
                        <h2>Корзина пуста</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                    </div>
                    }
                
               
            </div>
        </div>
    )
}


export default Drawer;