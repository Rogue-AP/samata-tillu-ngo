import React from 'react';
import './Navbar.scss';

export default function Navbar() {
    return (
        <header>
            <ul className='navbar'>
                <li className='navbar-item'><a href="/">Home</a></li>
                <li className='navbar-item'><a href="#news">News</a></li>
                <li className='navbar-item'><a href="#contact">Contact</a></li>
                <li className='navbar-item'><a href="#about">About</a></li>
            </ul>
        </header>
    );
}