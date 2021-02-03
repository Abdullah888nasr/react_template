import Styled from 'styled-components';
export const SocialMediaDiv = Styled.div`
    height: auto;
    overflow: hidden;
`;

export const Social = Styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background-color : ${props => props.media === 1 ? '#3b5998' : props.media === 2 ? '#498cbf' : props.media === 3 ? '#cc2127' : ''};
    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`;

export const Icon = Styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 20px;
`;

export const SocialPre = Styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`;

export const SocialSpan = Styled.span `
    display: block;
    font-weight: ${props => props.info?'normal':''};
`;

