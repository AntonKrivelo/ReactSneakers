import './App.css';
import Card from './Components/Card/Card';
import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';


function App() {

const sneakersList = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: '/Img/Sneakers/1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: './Img/Sneakers/2.jpg'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999},
]

  return (
    <div className="wrapper">
        <div className="container">
          <Header />
          {/* <Drawer /> */}
          <div className="container content">
              <h1 className="title">Все кроссовки:</h1>
                <SearchBlock />
              <div className="content-item">
                {
                  sneakersList.map((item) => <Card imgUrl={item.imgUrl} item={item} />)
                }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
