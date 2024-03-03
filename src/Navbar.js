import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    Navbar
                </a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-links">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
