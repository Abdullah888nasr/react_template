import Styled from 'styled-components';
export const NavbarDiv = Styled.div `
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #000;
    position: fixed;
    z-index: 999;
    width: 100%;
`;
export const Logo = Styled.div `
    width: 50%;
    float: left;
    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`;
export const LogoText = Styled.h2 `
    font-size: 30px;
    margin: 5;
    font-weight: bold;
    margin:5px 0;
`;
export const UlList = Styled.ul `
    width: 45%;
    float: left;
    list-style: none;
    @media (max-width : 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none;
    }
`;
export const ListItem = Styled.li `
    display: inline-block;
    @media (max-width : 991px) {
        display: block;
        text-align: center;
    }
`;
export const Anchor = Styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
`;
/* Media for Navbar Style */ 
