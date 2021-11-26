import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCart from '../../Components/Cart/ShoppingCart';

//Styles
import "./Header.css";

const Header = () => {

    const location = useLocation();

    return (
        <header>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pandora_Logo_2019.svg" alt="Logo Pandora" className="logo"/>
            </Link>

            {   location.pathname === "/" ? <ShoppingCart /> : null}
        </header>
    )
}

export default Header
