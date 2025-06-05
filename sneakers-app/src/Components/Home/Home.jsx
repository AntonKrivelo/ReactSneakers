import React,{useState, useEffect} from "react";
import axios from 'axios';
import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';
import Drawer from '../Drawer/Drawer';
import Header from '../Header/Header';
import '../../index.scss';



const Home = () => {


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
        <div className="home">
            <div className="container">
                <Header openOnClickCart={openOnClickCart} />
                {
                openCart ? <Drawer removeCartItem={removeCartItem} openOnClickCart={openOnClickCart} cartItems={cartItems} closeOverlayCart={closeOverlayCart} /> : null
                }
                <div className="container content"> 
                <h1 className="title">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки:"}</h1>
                  <SearchBlock value={searchValue} clearValue={() => setSearchValue('')} searchValue={searchValue} onChangeValue={onChangeValue} />
                <div className="content-item">
                  {
                    items
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item,index) => 
                    <Card key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} 
                    onAddToCart={(obj) => onAddToCart(obj)} 
                    onAddToFavourite={(obj) => onAddToFavourite(obj)} 
                    />)
                  }
                </div>
            </div>
            </div>
        </div>
    )
}


export default Home;