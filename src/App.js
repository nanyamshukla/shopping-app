import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/HomePage.page';
import ShopPage from './Pages/Shop/ShopPage.page';
import Header from './Components/Header/Header.component';

function App() {
  return (
    <div className="App">
        <Header />
        <switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </switch>
    </div>
  );
}

export default App;
