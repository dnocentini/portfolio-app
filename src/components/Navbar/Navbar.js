import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElem';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink> 
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink> 
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink> 
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>    
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
