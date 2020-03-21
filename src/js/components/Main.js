import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Architecture from "../connectors/Architecture";
import Interior from "../connectors/Interior";
import Construction from "../connectors/Construction";
import Project from "../connectors/Project";

export default class Main extends React.Component {
  render() {
    // {true ? <Redirect to="/architecture" /> : <Architecture />}
    return (
      <main className="main-area">
        <div className="centered">
          <Switch>
            <Route exact path="/" component={Architecture} />
            <Route exact path="/interior" component={Interior} />
            <Route exact path="/construction" component={Construction} />
            <Route path="/project/:name" component={Project} />
          </Switch>
        </div>
      </main>
    );
  }
}
