import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product-container'>
            <img src= {img} alt="shoe" />
            <h3 className='product-name'>{name}</h3>
            <h4  className='product-price'>Price: ${price}</h4>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-rating'>Rating: {ratings} stars</p>
            <button className='product-btn'>Add to cart</button>
        </div>
    );
};

export default Product;