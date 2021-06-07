import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
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
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Ddn.</NavLogo>
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
