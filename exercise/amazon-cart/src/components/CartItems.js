import React from 'react'
import CartItem from './CartItem.js'
import './CartItems.css'
function CartItems({items}) {
  console.log(items);
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr/>
          <div className="CartItems-items">
            {items.map((item, index) => 
              <CartItem
                item={item}
                key={index}
              />
            )}
            {/* <CartItem /> */}
          </div>
        </div>
    )
}

export default CartItems
