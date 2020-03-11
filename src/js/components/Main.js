import React from "react";
import { Route, Switch } from "react-router-dom";
import Architecture from "../connectors/Architecture";
import Interior from "../connectors/Interior";
import Construction from "../connectors/Construction";

export default class Main extends React.Component {
  render() {
    return (
      <main className="main-area">
        <div className="centered">
          <Switch>
            <Route exact path="/" component={Architecture} />
            <Route exact path="/interior" component={Interior} />
            <Route exact path="/construction" component={Construction} />
          </Switch>
        </div>
      </main>
    );
  }
}
