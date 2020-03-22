import React from "react";
import Card from "./Card";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: window.location.pathname.split("/")[2]
    };
  }

  componentDidMount() {
    this.props.fetchData(this.state.selected);
  }

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
