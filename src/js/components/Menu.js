import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <nav id="single-nav" className="single-nav menu" role="navigation">
        <ul>
          <li>
            <Link className="link" to="/">
              Architecture
            </Link>
          </li>
          <li>
            <Link className="link" to="/interior">
              Interior
            </Link>
          </li>
          <li>
            <Link className="link" to="/construction">
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
