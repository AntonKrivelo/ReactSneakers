import React from "react";
import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';
import Drawer from '../Drawer/Drawer';
import '../../index.scss';
import { AppContext } from "../../App";



const Home = ({items, 
               searchValue, 
               setSearchValue, 
               openOnClickCart,
               removeCartItem,
               openCart,
               cartItems,
               onAddToFavourite,
               onAddToCart,
               onChangeValue,
               closeOverlayCart,
               isLoading
              }) => {

const {getAddedItems} = React.useContext(AppContext)

const renderItems = () => {
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
  
 return (isLoading ? [...Array(5)] : filteredItems).map((item,index)  => (
          <Card 
            key={index} 
            loading={isLoading}
            onAddToCart={(obj) => onAddToCart(obj)} 
            onAddToFavourite={(obj) => onAddToFavourite(obj)} 
            added={getAddedItems(item && item.id)}
            {...item}
          />
  ))
}

    return (
        <div>
              {
              openCart ? <Drawer removeCartItem={removeCartItem} openOnClickCart={openOnClickCart} cartItems={cartItems} closeOverlayCart={closeOverlayCart} /> : null
              }
              <div className="container content"> 
              <h1 className="title">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки:"}</h1>
                <SearchBlock value={searchValue} clearValue={() => setSearchValue('')} searchValue={searchValue} onChangeValue={onChangeValue} />
              <div className="content-item">
                { 
                renderItems(isLoading)
                }
              </div>
            </div>
        </div>
    )
}


export default Home;