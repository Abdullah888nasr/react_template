import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarDiv, Logo, LogoText, UlList, ListItem, Anchor} from './style';
const Navbar = () => {
    return(
        <NavbarDiv> 
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link className="anchor" to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link className="anchor" to="/contact">Contact</Link></ListItem>
                </UlList>
            </div>
        </NavbarDiv>
    )
}
export default Navbar;