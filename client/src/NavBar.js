import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
    <div className = "navbar">    
    <h2><Link to="/" style={{ textDecoration: 'none'}}>WhatPill</Link></h2>
    <ul>
        <li>
            <Link to="/user_medications/">My Meds</Link>
        </li>
        {/* <li>
            <Link to="/medications/">Medications</Link>
        </li>
        <li>
            <Link to="signup">SignUp</Link>
        </li>
    </ul> */}
    </ul>
    </div>
    );
}

export default NavBar;
