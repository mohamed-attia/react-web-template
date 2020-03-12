import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  Worktitle,
  WorkPart,
  Icon,
  PartTitle,
  PartLine,
  PartDesc,
  Span
} from "./style";

class Work extends Component {
  state = {
    works: []
  };

  componentDidMount() {
    axios.get("js/data.json").then(res => {
      console.log(res.data.works);
      this.setState ({ works: res.data.works });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map(workItem => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <PartLine />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <Worktitle>
            <Span>My</Span> Work
          </Worktitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
