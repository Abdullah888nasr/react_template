import React from 'react';
import {HomeDiv, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn} from './style.js';
const Home = () => {
    return(
        <HomeDiv>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Abdullah Nasr</HomeTitle>
                    <HomeInfo>Back-End Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Back-End Developer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeDiv>
    )
}
export default Home;