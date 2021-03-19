import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-main">
            <div className="header-text">
                Easy Transport
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/destination" style={{ textDecoration: 'none' }}>Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
                    </li>
                </ul>
                <button className="btn">Login</button>
            </div>
        </div>
    );
};

export default Header;