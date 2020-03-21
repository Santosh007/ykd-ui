import React from "react";
import Card from "./Card";

export default class Project extends React.Component {
  render() {
    return this.props.project.map(project => (
      <Card key={project.key} project={project} />
    ));
  }
}
