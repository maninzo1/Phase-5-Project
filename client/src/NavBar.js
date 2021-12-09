import React from 'react';
// import { Link } from 'react-router-dom'
import { Container, Nav, Navbar} from 'react-bootstrap'

function NavBar() {
    return (
        
    <Navbar className="color-nav" variant="light">   
    <Container>
     <Nav.Item>
   <h1> <Navbar.Brand href="/">WhatPill</Navbar.Brand> </h1>
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
    </Container>
    </Navbar>
 
    );
}
export default NavBar;
