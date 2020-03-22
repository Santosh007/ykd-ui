import React from "react";
import { Link } from "react-router-dom";

export default class FCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.project.image,
      alt: this.props.project.alt,
      name: this.props.project.name,
      desc: this.props.project.desc
    };
  }

  render() {
    return (
      <article className="card">
        <Link to={`/project/${this.state.name}`}>
          <figure className="thumbnail">
            <img src={this.state.image} alt={this.state.alt} />
          </figure>
          <div className="card-content">
            <h2>{this.state.name}</h2>
            <p>{this.state.desc}</p>
          </div>
        </Link>
      </article>
    );
  }
}
