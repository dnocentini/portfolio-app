import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IoDocumentText} from 'react-icons/io5';
import { animateScroll as scroll} from 'react-scroll';
import PDF from '../../documents/Resume.pdf'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn
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
                            <NavLink 
                                to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Home</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='projects'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Projects</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Contact</NavLink> 
                        </NavItem>          
                    </NavMenu>
                    <NavBtn>
                        <a href={PDF} target="_blank" rel="noopener noreferrer"><IoDocumentText size='2em' color='#fff' /> </a>
                    </NavBtn>
                </NavbarContainer>    
            </Nav>
        </>
    )
}

export default Navbar;
