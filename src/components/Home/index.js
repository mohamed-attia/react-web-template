import React from "react";
import {HomeSection,HomeInfo,HomeInformation,Hometitle,HomeDesc,Span, Btn} from './style'
const Home = () => {
  return (
    <HomeSection>
        <div className="container">
            <HomeInformation>
                <Hometitle>mohamed attia</Hometitle>
                <HomeInfo>Title</HomeInfo>
                <HomeDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </HomeDesc>
                <Btn> Lets Begin</Btn>
            </HomeInformation>
        </div>
    </HomeSection>
  )
};

export default Home;
