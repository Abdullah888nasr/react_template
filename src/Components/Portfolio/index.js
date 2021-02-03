import React, {useState, useEffect} from 'react';
import {PortfolioDiv, PortfolioTitle, Span, PortfolioList, PortfolioItem, BoxDiv, Img, Overlay, SpanImg} from './style.js';
import axios from 'axios';
const Portfolio = () => {
    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)});
    }, []);
    const portfoliList = Images.map(item => {
        return(
            <BoxDiv key={item.id}>
                <Img src={item.image} alt=""/>
                <Overlay>
                    <SpanImg>
                        Show Image
                    </SpanImg>
                </Overlay>
            </BoxDiv>
        );
    });
    return(
        <PortfolioDiv>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active={1}>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <div>
                {portfoliList}
            </div>
        </PortfolioDiv>
    )
}
export default Portfolio;