import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarDiv, Logo, LogoText, UlList, ListItem, Anchor} from './style';
const Navbar = () => {
    return(
        <NavbarDiv> 
            <div className="container">
                <Logo className="logo">
                    <LogoText><Link className="anchor" to="/" data-value="Home">Ultra Profile</Link></LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link className="anchor" to="/" data-value="Home">Home</Link></ListItem>
                    <ListItem><Anchor className="link" href="#" data-value="Work">Work</Anchor></ListItem>
                    <ListItem><Anchor className="link" href="#" data-value="Portfolio">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor  className="link" href="#" data-value="Resume">Resume</Anchor></ListItem>
                    <ListItem><Anchor className="link" href="#" data-value="About">About</Anchor></ListItem>
                    <ListItem><Link className="anchor" to="/contact">Contact</Link></ListItem>
                </UlList>
            </div>
        </NavbarDiv>
    )
}
export default Navbar;