import React from "react";
import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';
import Drawer from '../Drawer/Drawer';
import '../../index.scss';



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
              
              }) => {


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
                  items
                  .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((item,index) => 
                  <Card key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} 
                  onAddToCart={(obj) => onAddToCart(obj)} 
                  onAddToFavourite={(obj) => onAddToFavourite(obj)} 
                  added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                
                  />)
                }
              </div>
            </div>
        </div>
    )
}


export default Home;