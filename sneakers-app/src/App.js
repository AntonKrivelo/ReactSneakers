import './App.css';
import React,{useState, useEffect} from 'react';
import Card from './Components/Card/Card';
import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';


function App() {

const [items, setItems] = useState([]);

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

  return (
    <div className="wrapper">
        <div className="container">
          <Header openOnClickCart={openOnClickCart} />
          {
            openCart ? <Drawer openOnClickCart={openOnClickCart} closeOverlayCart={closeOverlayCart} /> : null
          }
          <div className="container content">
              <h1 className="title">Все кроссовки:</h1>
                <SearchBlock />
              <div className="content-item">
                {
                  items.map((item) => <Card imgUrl={item.imgUrl} item={item} />)
                }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
