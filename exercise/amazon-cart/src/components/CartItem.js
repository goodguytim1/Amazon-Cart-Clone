import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
              <img src="data:image/jpeg;base64,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" alt=""/>
            </div>
            <div className="CartItem-info">
              <div className="info-title">
                <h2>Apple iPad Pro</h2>
              </div>
              <div className="info-stock"> In stock</div>
              <div className="item-actions">
                <div className="item-quantity">
                  <select/>
                </div>
                <div className="item-delete">Delete</div>
              </div>
            </div>
            <div className="CartItem-price">$769.00</div>
        </div>
    )
}

export default CartItem
