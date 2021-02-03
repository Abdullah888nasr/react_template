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
            <div className="container">
                <ProfileDiv>
                    <Title><DivSpan>My</DivSpan> Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.google.com</Span>
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