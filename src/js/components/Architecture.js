import React from "react";
import Cards from "./Cards";

export default class Architecture extends React.Component {
  render() {
    return <Cards projects={this.props.architecture} />;
  }
}
