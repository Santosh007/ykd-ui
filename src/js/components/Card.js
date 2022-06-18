import React from "react";

export default class Card extends React.Component {
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
        <button>
          <figure className="thumbnail">
            <img src={this.state.image} alt={this.state.alt} />
          </figure>
          <div className="card-content">
            <h2>{this.state.name}</h2>
            <p>{this.state.desc}</p>
          </div>
        </button>
      </article>
    );
  }
}
