import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className = "header">
            <img src={logo} alt="" />
            <ul className='nav-menu'>
                <li className='nav-item'><a>Order</a></li>
                <li className='nav-item'><a>Order Review</a></li>
                <li className='nav-item'><a>Manage Inventory</a></li>
                <li className='nav-item'><a>Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;