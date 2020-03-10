import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.plan.url,
      alt: this.props.plan.alt,
      name: this.props.plan.name,
      desc: this.props.plan.desc
    };
  }

  render() {
    return (
      <article className="card">
        <a href="#">
          <figure className="thumbnail">
            <img src={this.state.image} alt={this.state.alt} />
          </figure>
          <div className="card-content">
            <h2>{this.state.name}</h2>
            <p>{this.state.desc}</p>
          </div>
        </a>
      </article>
    );
  }
}
