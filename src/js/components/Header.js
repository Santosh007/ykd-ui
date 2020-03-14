import React from "react";
import Menu from "../connectors/Menu";

export default class Header extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="centered">
          <div className="site-branding">
            <h1 className="site-title">YK Designs</h1>
          </div>
        </div>
      </header>
    );
  }
}
