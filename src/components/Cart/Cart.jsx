import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        tax = (totalPrice*10)/100;
        grandTotal = totalPrice + totalShipping + tax;
    }
    return (
        <div>
            <h2>Order summary</h2>
            <div className='order-info'>
                <p>Selected items: {cart.length}</p>
                <p>Total price: ${totalPrice}</p>
                <p>Total shipping charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <button className='clear-btn'>Clear cart</button>
            <button className='review-btn'>Review order</button>
        </div>
    );
};

export default Cart;