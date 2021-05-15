import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavbarElem';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Logo</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/home">Home</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to="/projects">Projects</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Contact">Contact</NavLink> 
                        </NavItem>          
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/rerume">Resume</NavBtnLink>   
                    </NavBtn>
                </NavbarContainer>    
            </Nav>
        </>
    )
}

export default Navbar;
