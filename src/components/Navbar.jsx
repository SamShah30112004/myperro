// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <>
        <div className="scroll-watcher"></div>
        <div className="navbar">
            <Link to="#" className="navbar-logo"><img src={logo}/></Link>
            <div className="navbar-nav">
                <Link smooth to="#home">Home</Link>
                <Link smooth to="#about">About</Link>
                <Link smooth to="#contact">Contact Us</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;