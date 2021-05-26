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

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Ddn.</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='home'>Home</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to='about'>About</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to='projects'>Projects</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'>Contact</NavLink> 
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
