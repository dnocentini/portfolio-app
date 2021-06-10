import React from 'react';
import {IoDocumentText} from 'react-icons/io5';
import PDF from '../../documents/Resume.pdf'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap
} from './SidebarElem';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <a href={PDF} target="_blank" rel="noopener noreferrer"><IoDocumentText size='2em' color='#d95c38' /> </a>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>   
    )
}

export default Sidebar;
