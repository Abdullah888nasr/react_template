import React, {useState, useEffect} from 'react';
import {ProfileSkills, ProfileDiv, ProfileList, ProfileItem, Span, Skills, SkillsDesc, BarDiv, SpanTitle, SpanPerc, SpanParent, Parent, Title, DivSpan} from './style.js';
import axios from 'axios';
const Profile = () => {
    const [Bar, setBar] = useState([]);
    useEffect (() => {
        axios.get('js/data.json').then(res => {setBar(res.data.skills)});
    }, []);
    const skillsList = Bar.map(skill => {
        return(
            <BarDiv key={skill.id}>
                <SpanTitle>{skill.skill_name}</SpanTitle>
                <SpanPerc>{skill.skill_perc}</SpanPerc>
                <Parent>
                    <SpanParent sp={skill.id}></SpanParent>
                </Parent>
            </BarDiv>
        )
    });
    return(
        <ProfileSkills>
            <div className="container" id="Resume">
                <ProfileDiv>
                    <Title><DivSpan>My</DivSpan> Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Abdullah Nasr
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            31/3/1997
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Qena, Almanshia
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            0100 495 3989
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            abdullah888nasr@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <a href="http://abdullahportfolio.epizy.com">My Portfolio</a>
                        </ProfileItem>
                    </ProfileList>
                </ProfileDiv>
                
                <Skills>
                    <Title><DivSpan>Some</DivSpan> Skills</Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsList}
                </Skills>
            </div>
        </ProfileSkills>
    )
}
export default Profile;