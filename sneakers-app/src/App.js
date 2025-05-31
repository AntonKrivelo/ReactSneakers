import './App.css';
import React,{useState, useEffect} from 'react';
import Card from './Components/Card/Card';
import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';


function App() {

const [items, setItems] = useState([]);

const [cartItems, setCartItems] = useState([]);

// useEffect(() => {
//   axios.get('https://68385e662c55e01d184d08ef.mockapi.io/items').then(({data}) => {
//     setItems(data.items)
//   })
// },[])

useEffect(() => {
    fetch('https://68385e662c55e01d184d08ef.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json => {
        setItems(json)
      }))
}, [setItems])


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
  setCartItems([...cartItems, obj])
}

const removeCartItem = (itemId) => {
  setCartItems(prev => prev.filter(item => item.id !== itemId))
}

  return (
    <div className="wrapper">
        <div className="container">
          <Header openOnClickCart={openOnClickCart} />
          {
            openCart ? <Drawer removeCartItem={removeCartItem} openOnClickCart={openOnClickCart} cartItems={cartItems} closeOverlayCart={closeOverlayCart} /> : null
          }
          <div className="container content">
              <h1 className="title">Все кроссовки:</h1>
                <SearchBlock />
              <div className="content-item">
                {
                  items.map((item,index) => <Card key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} onAddToCart={(obj) => onAddToCart(obj)} />)
                }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
