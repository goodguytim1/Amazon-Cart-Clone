import CartItems from './components/CartItems'
import Header from './components/Header'
import './App.css';
import CartTotal from './components/CartTotal';
import data from './Data';
import React, { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState(data);
  console.log(cartItems);
  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems items={cartItems}/>
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
