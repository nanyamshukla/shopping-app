import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/HomePage.page';

const hatsPage = () => {
    return(
        <div>Hats Page</div>
    );
}

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={hatsPage} />
    </div>
  );
}

export default App;
