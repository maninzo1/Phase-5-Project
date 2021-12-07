import React from 'react';
import { Link } from 'react-router-dom'
import {Button, Navbar} from 'react-bootstrap'

function NavBar() {
    return (
    
    <Navbar bg="light" expand="lg">   
    <h2><Link to="/" style={{ textDecoration: 'none'}}>WhatPill</Link></h2>
    
        <Button variant="outline-secondary">
            <Link to="/user_medications/" style={{ textDecoration: 'none'}}>My Meds</Link>
        </Button>
        <Button variant="outline-secondary">
            <Link to="/takens/" style={{ textDecoration: 'none'}}>My Medication History</Link>
        </Button>
        {/* <li>
            <Link to="signup">SignUp</Link>
        </li>
    </ul> */}
    </Navbar>
    
    );
}
export default NavBar;
