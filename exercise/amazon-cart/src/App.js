import CartItems from './components/CartItems'
import Header from './components/Header'
import './App.css';
import CartTotal from './components/CartTotal';
import data from './Data';
import React, { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems item={cartItems}/>
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
