import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar container-page">
            <h1>Comisión 43570</h1>
            <ul>
                <li>Remeras</li>
                <li>Camisas</li>
                <li>Billeteras</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
