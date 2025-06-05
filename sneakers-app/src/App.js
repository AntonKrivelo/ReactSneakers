import './App.css';
import React from 'react';
import './index.scss';
import Favourite from './Components/Favourite/Favourite';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {





  return (
      <div className="wrapper">
          <Home />
      </div>
  );
}

                {/* <Routes>
                  <Route path="/favourite" element={<Favourite/>} exact/>
                </Routes> */}

export default App;
