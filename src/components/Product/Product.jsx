import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product-container'>
            <img src= {img} alt="shoe" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4  className='product-price'>Price: ${price}</h4>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> addToCart(props.product)} className='product-btn'>Add to cart <FontAwesomeIcon icon = {faShoppingCart} /></button>
        </div>
    );
};

export default Product;