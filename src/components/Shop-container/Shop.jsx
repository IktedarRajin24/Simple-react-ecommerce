import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    const addToCart = products =>{
        // console.log(products);
        let newCart = [...cart , products];
        setCart(newCart);
    }

    useEffect ( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    } ,[])


    return (
        <div className="shop-container">
            
            <div className="products-container">
                
                {
                    products.map(product => <Product 
                        key = {product.id} 
                        product ={product}
                        addToCart = {addToCart}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;