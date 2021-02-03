import React from 'react';
import {AboutDiv, AboutInfo, InfoTitle, Span, InfoDir, InfoDesc, Anchor} from './style.js';
const About = () => {
    return(
        <AboutDiv>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutDiv>
    )
}
export default About;