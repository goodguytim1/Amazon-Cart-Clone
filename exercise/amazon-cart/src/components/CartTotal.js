import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format'

function CartTotal({items}) {

    const getTotalItems = () => {
        console.log("GETTOTAL ITEMS ", items);
        let total = 0;
        items.forEach((item) => {
            total += Number(item.quantity);
            console.log("total ", total);
        });
        return total;
    }

    const getTotalPrice = () => {
        // init price to 0
        // loop through all items with quantities and prices adding them
        // return total price
        let total = 0;
        items.forEach((item) => {
            total+= (item.price * item.quantity);
        });
        return total;
        //return Math.round(total * 100) / 100;
    }
    return (
        <div className="CartTotal">
            <h3>Subtotal({getTotalItems()} items):
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal
