import React from 'react'
import './Info.scss';
import { AppContext } from '../../App';

const Info = ({ image, title, description }) => {

  const {setOpenCart} = React.useContext(AppContext)

  return (
        <div className="cart-empty">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setOpenCart(false)}>
                Вернуться назад
            </button>
        </div>
  )
}

export default Info
