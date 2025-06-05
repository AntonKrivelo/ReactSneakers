import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Favourite from './Components/Favourite/Favourite';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import './index.scss';
import Header from './Components/Header/Header';


function App() {

  
const [items, setItems] = useState([]);
const [searchValue, setSearchValue] = useState('');

const [cartItems, setCartItems] = useState([]);
const [favouriteItems, setFavouriteItems] = useState([]);

const [openCart, setOpenCart] = useState(false);

const openOnClickCart = () => {
  setOpenCart(!openCart);
}

const closeOverlayCart = (e) => {
  if(e.target.classList.contains('drawer-overlay')) {
    setOpenCart(false)
  }
}

const removeCartItem = (id) => {
  axios.delete(`https://68385e662c55e01d184d08ef.mockapi.io/cart/${id}`)
  setCartItems((prev) => prev.filter(item => item.id !== id))
}

useEffect(() => {
      axios.get('https://68385e662c55e01d184d08ef.mockapi.io/items').then(res => {
        setItems(res.data)
      });
      axios.get('https://68385e662c55e01d184d08ef.mockapi.io/cart').then(res => {
        setCartItems(res.data)
      })
}, [])


const onAddToCart = (obj) => {
  axios.post('https://68385e662c55e01d184d08ef.mockapi.io/cart', obj)
  setCartItems([...cartItems, obj])
}

const onAddToFavourite = (obj) => {
  setFavouriteItems([...favouriteItems, obj])
}

const onChangeValue = (e) => {
  setSearchValue(e.target.value)
}

  return (
      <div className="wrapper">
        <div className="container">
          <Header openOnClickCart={openOnClickCart} />
            <Routes>
                <Route path="/" element={<Home 
                items={items} 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                openOnClickCart={openOnClickCart}
                removeCartItem={removeCartItem}
                openCart={openCart}
                cartItems={cartItems}
                onAddToFavourite={onAddToFavourite}
                onAddToCart={onAddToCart}
                onChangeValue={onChangeValue}
                closeOverlayCart={closeOverlayCart}
                />} exact/>
                <Route path="/favourite" element={<Favourite />} exact/>
            </Routes>
        </div>
      </div>
  );
}


export default App;
