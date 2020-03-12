import React,{useState,useEffect} from "react";
import axios from 'axios';
import {PortfolioSection,PortfolioSpan,OverLaySpan,PortfolioTitle,PortfoioList,PortfolioListItem,ImageWrapper,BoxImage, OverLay} from './style'
const Portfolio = ()=> {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        axios.get("js/data.json").then(res => {
            setImages(res.data.portfolio)           
          });
    },[])

    const portfolioImages = images.map((imagesItem)=>{
        return( <ImageWrapper key={imagesItem.id}>
            <BoxImage src={imagesItem.image} alt=""/>
            <OverLay>
                <OverLaySpan>
                    Show Image
                </OverLaySpan>
            </OverLay>
        </ImageWrapper>)
    })
  return (
        <PortfolioSection id="portfolio">
            <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
            <PortfoioList>
                <PortfolioListItem active>All</PortfolioListItem>
                <PortfolioListItem>HTML</PortfolioListItem>
                <PortfolioListItem>Photoshop</PortfolioListItem>
                <PortfolioListItem>Wordpress</PortfolioListItem>
                <PortfolioListItem>Mobile</PortfolioListItem>
            </PortfoioList>
            
            <div className="box">
                {portfolioImages}
            </div>
        </PortfolioSection>
  )

};

export default Portfolio;
