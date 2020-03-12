import React from "react";
import Cards from "./Cards";

export default class Architecture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.architecture
    };
  }

  render() {
    return <Cards projects={this.state.projects} />;
  }
}
