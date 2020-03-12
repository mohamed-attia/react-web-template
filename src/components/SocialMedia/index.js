import React from "react";
import axios from "axios";
import {
  Span,
  Info2,
  P,
  SocialMediaContainer,
  SocialMediaSocial,
  I
} from "./style";
export class SocialMedia extends React.Component {
  state = {
    social: []
  };
  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const {social} = this.state;
    const socialList = social.map((Socialitem) => {
      return (
          <SocialMediaSocial  item={Socialitem.id}  key={Socialitem.id}>
            <I className={Socialitem.icon}></I>
            <P>
              <Span>{Socialitem.title}</Span>
              <Info2>{Socialitem.body}</Info2>
            </P>
          </SocialMediaSocial>
      );
    });
    return (
    <SocialMediaContainer id="social">
      { socialList }
    </SocialMediaContainer>
    )
  }
}

export default SocialMedia;
