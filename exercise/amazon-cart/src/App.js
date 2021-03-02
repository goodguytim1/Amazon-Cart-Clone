import logo from './logo.svg';
import CartItems from './components/CartItems.js'
import Header from './components/Header.js'
import './App.css';
import CartTotal from './components/CartTotal';

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
