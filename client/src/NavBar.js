import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
    <div className = "navbar">    
    <h2>WhatPill</h2>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        {/* <li>
            <Link to="login">Login</Link>
        </li>
        <li>
            <Link to="signup">SignUp</Link>
        </li> */}
    </ul>
    </div>
    );
}

export default NavBar;
