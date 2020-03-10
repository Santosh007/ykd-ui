import React from "react";
import { Route, Switch } from "react-router-dom";
import Plans from "./Plans";
import Interior from "./Interior";
import Construction from "./Construction";

export default class Main extends React.Component {
  render() {
    return (
      <main className="main-area">
        <div className="centered">
          <Switch>
            <Route exact path="/" component={Plans} />
            <Route exact path="/interior" component={Interior} />
            <Route exact path="/construction" component={Construction} />
          </Switch>
        </div>
      </main>
    );
  }
}
