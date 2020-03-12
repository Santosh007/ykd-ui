import React from "react";
import Card from "./Card";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects
    };
  }

  render() {
    return (
      <section className="cards">
        {this.state.projects.map(project => (
          <Card key={project.key} project={project} />
        ))}
      </section>
    );
  }
}
