import React from "react";
import {Creative,CreativeInfo,InfoDir,InfoTitle,InfotitleSpan,InfoDesc,InfoDescAnchor} from './style'
const About = () => {
  return(
        <Creative id="about">
            <div className="container" >
                <CreativeInfo>
                    <InfoTitle><InfotitleSpan>This is</InfotitleSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </Creative>
  );
};

export default About;
