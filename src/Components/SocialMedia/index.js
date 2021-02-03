import React, {useState, useEffect} from 'react';
import {SocialMediaDiv, Social, Icon, SocialPre, SocialSpan} from'./style.js';
import axios from 'axios';
const SocialMedia = () => {
    const [SocialArray, setSocialArray] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res=>{setSocialArray(res.data.social)});
    }, []);
    const socialList = SocialArray.map(item => {
        return(
            <Social key={item.id} media={item.id}>
                <Icon className={item.icon}></Icon>
                <SocialPre>
                    <SocialSpan>{item.title}</SocialSpan>
                    <SocialSpan info>{item.body}</SocialSpan>
                </SocialPre>
            </Social>
        )
    });
    return(
        <SocialMediaDiv>
            {socialList}
            
        </SocialMediaDiv>
    )
}
export default SocialMedia;