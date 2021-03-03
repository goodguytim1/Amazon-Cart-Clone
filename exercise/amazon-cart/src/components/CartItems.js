import React from 'react'
import CartItem from './CartItem.js'
import './CartItems.css'
function CartItems({ items, setCartItems }) {
  
  
  const changeItemQuantity = (e, index) => {
    // item quantity onChange(() => {item.quantity = e.target.value})
    // Pass in index
    // Use index to change quantity
    // update the items state
    // console.log(e.target.value);
    // console.log("Index is ", index);
    // DO NOT UPDATE THE STATE WITHOUT setter function
    // newItems is a deep clone! COOL
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  }

    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr/>
          <div className="CartItems-items">
            {items.map((item, index) => 
              <CartItem
                index={index}
                item={item}
                key={index}
                changeItemQuantity={changeItemQuantity}
              />
            )}
            {/* <CartItem /> */}
          </div>
        </div>
    )
}

export default CartItems
