import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = props.fetchData;
    this.state = {
      selected:
        window.location.pathname.slice(1) === ""
          ? "architecture"
          : window.location.pathname.slice(1)
    };
  }

  componentDidMount() {
    this.fetchData(this.state.selected);
  }

  handleChange(selected) {
    this.setState({ selected }, () => this.fetchData(this.state.selected));
    //console.log(selection);
    //console.log(this.state.selected);
  }

  render() {
    return (
      <nav id="single-nav" className="single-nav menu" role="navigation">
        <ul>
          <li>
            <Link
              className="link"
              to="/"
              onClick={() => this.handleChange("architecture")}
            >
              Architecture
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/interior"
              onClick={() => this.handleChange("interior")}
            >
              Interior
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/construction"
              onClick={() => this.handleChange("construction")}
            >
              Construction
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
