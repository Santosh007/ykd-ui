import React from "react";
import FCard from "./FCard";

export default class Construction extends React.Component {
  handleChange(projectName) {
    this.props.fetchData(projectName);
  }

  render() {
    return (
      <section className="cards">
        {this.props.construction.map(project => (
          <FCard
            key={project.key}
            project={project}
            onClick={() => this.handleChange(project.name)}
          />
        ))}
      </section>
    );
  }
}
