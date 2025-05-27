import './App.css';
import Card from './Components/Card/Card';
// import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';


function App() {

const sneakersList = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: 'https://img.freepik.com/free-photo/men-shoes_1203-8654.jpg?ga=GA1.1.1860244197.1732645229&semt=ais_hybrid&w=740'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: 'https://img.freepik.com/premium-photo/children-s-sport-shoe_770606-2827.jpg?ga=GA1.1.1860244197.1732645229&semt=ais_hybrid&w=740'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: 'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?ga=GA1.1.1860244197.1732645229&semt=ais_hybrid&w=740'},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: 'https://img.freepik.com/premium-photo/female-sport-shoes_78621-2762.jpg?ga=GA1.1.1860244197.1732645229&semt=ais_hybrid&w=740'},
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
                  sneakersList.map((item) => <Card imgUrl={item.imgUrl} item={item} clickInfo={item} />)
                }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
