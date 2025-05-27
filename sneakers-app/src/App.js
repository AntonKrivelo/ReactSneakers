import './App.css';
import Card from './Components/Card/Card';
import Drawer from './Components/Drawer/Drawer';
import Header from './Components/Header/Header';
import SearchBlock from './Components/SearchBlock/SearchBlock';
import './index.scss';



function App() {
  return (
    <div className="wrapper">
        <div className="container">
          <Header />
          <Drawer />
          <div className="container content">
              <h1 className="title">Все кроссовки:</h1>
                <SearchBlock />
              <div className="content-item">
                <Card />
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
