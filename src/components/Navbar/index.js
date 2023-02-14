import React from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer,  
    NavMenu, 
    NavItem, 
    NavLink,
    NavPageLink,
    DownloadLink,
    Button,
    MobileIcon, 
    MobileDownloadLink,
    MobileButton,
} from './NavbarElements';
import Brochure from "../brochure/Sponsorship_Brochure.pdf";

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <MobileDownloadLink href={Brochure} download="Brochure" target='_blank'>
                            <MobileButton>Brochure</MobileButton>
                    </MobileDownloadLink>
                    <NavMenu>
                        <DownloadLink href={Brochure} download="Brochure" target='_blank'>
                            <Button>Brochure</Button>
                        </DownloadLink>
                        <NavItem>
                            <NavLink 
                                to='1'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Technical
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='3'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Gaming
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink 
                                to='2'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Workshops
                            </NavLink>
                        </NavItem> */}

                        <NavItem>
                            <NavLink
                                to='highlights'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Highlights
                            </NavLink>
                        </NavItem>
                        <NavItem style={{fontFamily: 'monospace'}}>
                            <NavPageLink
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                activeClass='active'
                            >
                                Texibition'23
                            </NavPageLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;