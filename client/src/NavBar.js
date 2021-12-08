import React from 'react';
import { Link } from 'react-router-dom'
import {Button, Nav, Navbar} from 'react-bootstrap'

function NavBar() {
    return (
    
    <Navbar bg="light" expand="lg">   
     <Nav.Item>
    <h2><Nav.Link href="/">WhatPill</Nav.Link></h2>
    </Nav.Item>
    <Nav className="justify-content-end">
    <Nav.Item>
    {/* <Button variant="outline-secondary" size="small"> */}
        <Nav.Link href="/user_medications/">My Meds</Nav.Link>
        {/* </Button> */}
        </Nav.Item>
        <Nav.Item>
        {/* <Button variant="outline-secondary"> */}
            <Nav.Link href="/takens/">Medication Log</Nav.Link>
        {/* </Button> */}
        </Nav.Item>
        {/* <li>
            <Link to="signup">SignUp</Link>
        </li>
    </ul> */}
    </Nav>
    </Navbar>
    
    );
}
export default NavBar;
