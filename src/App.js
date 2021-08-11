import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/HomePage.page';
import ShopPage from './Pages/Shop/ShopPage.page';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
