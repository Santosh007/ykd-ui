import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default class Architecture extends React.Component {
  handleChange(projectName) {
    this.props.fetchData(projectName);
  }

  render() {
    return this.props.architecture.map(project => (
      <Link
        key={project.key}
        to={`/project/${project.name}`}
        onClick={() => this.handleChange(project.name)}
      >
        <Card project={project} />
      </Link>
    ));
  }
}
