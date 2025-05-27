import React from "react";
import "./Drawer.scss";
import CartItem from "../CartItem/CartItem";

const Drawer = () => {
    return (
        <div className="drawer-overlay">
            <div className="drawer-block">
                <h2 className="drawer-block-title">Корзина</h2>
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
                        <button className="drawer-block-buy-btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Drawer;