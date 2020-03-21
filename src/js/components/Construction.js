import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default class Construction extends React.Component {
  handleChange(projectName) {
    this.props.fetchData(projectName);
  }

  render() {
    return this.props.construction.map(project => (
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
