import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar container-page">
            <h1>
                <Link to="/">Comisión 43570</Link>
            </h1>
            <ul>
                <li>
                    <NavLink to="/categoria/remeras">Remeras</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/camisas">Camisas</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/billeteras">Billeteras</NavLink>
                </li>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
