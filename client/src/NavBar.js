import React from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
function NavBar() {
    return (
    <div className = "navbar">    
    <h2><Link to="/" style={{ textDecoration: 'none'}}>WhatPill</Link></h2>
    
        <Button variant="info">
            <Link to="/user_medications/" style={{ textDecoration: 'none'}}>My Meds</Link>
        </Button>
        {/* <li>
            <Link to="/medications/">Medications</Link>
        </li>
        <li>
            <Link to="signup">SignUp</Link>
        </li>
    </ul> */}
  
    </div>
    );
}
export default NavBar;
