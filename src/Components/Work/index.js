import React, {Component} from 'react';
import axios from 'axios';
import {WorkDiv, WorkTitle, Span, Part, Icon, PartTitle, Line, PartDesc} from './style.js';
class Work extends Component {
    state = {
        works: []
    }
    componentDidMount(){
        axios.get('js/data.json').then( res => this.setState({works:res.data.works}))
    }
    render(){
        const worklist = this.state.works.map( work => {
            return(
                <Part key={work.id} first={work.id}>
                        <Icon className={work.icon_name}></Icon>
                        <PartTitle>{work.title}</PartTitle>
                        <Line />
                        <PartDesc>
                           {work.body}
                        </PartDesc>
                </Part>
            );
        });
        return(
            <WorkDiv>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worklist}
                </div>
            </WorkDiv>
        )
    }
}
export default Work;