import React from "react";
import Card from "./Card";

export default class Project extends React.Component {
  render() {
    return (
      <section className="cards">
        {this.props.project.map(project => (
          <Card key={project.key} project={project} />
        ))}
      </section>
    );
  }
}
