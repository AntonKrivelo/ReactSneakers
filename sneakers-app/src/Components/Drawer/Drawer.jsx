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
                </div>
            </div>
        </div>
    )
}


export default Drawer;