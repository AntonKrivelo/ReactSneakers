import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Components/Card/Card';
import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';


function App() {

const [items, setItems] = useState([]);
const [searchValue, setSearchValue] = useState('');
const [cartItems, setCartItems] = useState([]);
const [favouriteItems, setFavouriteItems] = useState([]);

// useEffect(() => {
//   axios.get('https://68385e662c55e01d184d08ef.mockapi.io/items').then(({data}) => {
//     setItems(data.items)
//   })
// },[])

useEffect(() => {
      axios.get('https://68385e662c55e01d184d08ef.mockapi.io/items').then(res => {
        setItems(res.data)
      });
      axios.get('https://68385e662c55e01d184d08ef.mockapi.io/cart').then(res => {
        setCartItems(res.data)
      })
}, [])


const [openCart, setOpenCart] = useState(false);

const openOnClickCart = () => {
  setOpenCart(!openCart);
}

const closeOverlayCart = (e) => {
  if(e.target.classList.contains('drawer-overlay')) {
    setOpenCart(false)
  }
}

const onAddToCart = (obj) => {
  axios.post('https://68385e662c55e01d184d08ef.mockapi.io/cart', obj)
  setCartItems([...cartItems, obj])
}

const onAddToFavourite = (obj) => {
  setFavouriteItems([...favouriteItems, obj])
}

const removeCartItem = (id) => {
  axios.delete(`https://68385e662c55e01d184d08ef.mockapi.io/cart/${id}`)
  setCartItems((prev) => prev.filter(item => item.id !== id))
}

const onChangeValue = (e) => {
  setSearchValue(e.target.value)
}

  return (
    <div className="wrapper">
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
                  .map((item,index) => <Card key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} onAddToCart={(obj) => onAddToCart(obj)} onAddToFavourite={(obj) => onAddToFavourite(obj)} />)
                }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
