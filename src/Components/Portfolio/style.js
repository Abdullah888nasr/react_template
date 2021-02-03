import Styled from 'styled-components';
export const PortfolioDiv = Styled.div `
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`;

export const PortfolioTitle = Styled.h2 `
    text-align: center;
    font-size: 35px;
`;

export const Span = Styled.span `
    font-weight: normal;
`;

export const PortfolioList = Styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0
`;

export const PortfolioItem = Styled.li `
    display: inline-block;
    width: 100px;
    padding: 10px;
    background-color: ${props => props.active === 1 ? '#eb5424':''};
    color: ${props => props.active === 1 ? '#fff':'#000'};
    @media (max-width:575px) {
        display: block;
        margin: auto
    }
`;

export const BoxDiv = Styled.div `
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > p{
        opacity: 1;
    }
    @media (max-width:575px) {
        width: 100%;
    }
    @media (min-width:576px) and (max-width : 768px ){
        width: 50%;
    }
`;

export const Img = Styled.img`
    width: 100%;
`;

export const Overlay = Styled.p `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    margin-top:0;
    height: 100%;
`;

export const SpanImg = Styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
    &:hover{
        color:#fff;
        background-color: #eb5424;
    }
`;
