import React from "react";
import "./Drawer.scss";
import CartItem from "../CartItem/CartItem";
import removeCart from "../../Icons/CartIcons/button-cart.svg";
import vector from "../../Icons/vector.svg";
import cartEmptyIcon from "../../Icons/CartIcons/cart-empty.svg";
import orderComplete from "../../Icons/Info/order-complete.jpg";
import Info from "../Info/Info";
import { AppContext } from "../../App";

const Drawer = ({openOnClickCart, closeOverlayCart, cartItems = [], removeCartItem}) => {
     
    const {setCartItems} = React.useContext(AppContext)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    let [countOrder, setCountOrder] = React.useState(0);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    

    const onClickOrder = () => {
        setIsLoading(true)
        setIsOrderComplete(true);
        setCountOrder(++countOrder)
        setCartItems([]);
        setIsLoading(false);

        }

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
                            <span>{totalPrice} Rub.</span>
                        </div>
                    <div className="drawer-block-buy-tax">
                        <p>Налог 5%:</p>
                        <span>{(totalPrice / 100 * 5)} Rub.</span>
                    </div>
                    <div>
                        <button disabled={isLoading} onClick={onClickOrder} className="drawer-block-buy-btn">Оформить заказ
                            <img src={vector} alt="vector-icon" />
                        </button>
                    </div>
                    </div>
                  
                    </div> :   <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${countOrder} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} image={isOrderComplete ? `${orderComplete}` : `${cartEmptyIcon}`}/>
                    }
            </div>
        </div>
    )
}


export default Drawer;
