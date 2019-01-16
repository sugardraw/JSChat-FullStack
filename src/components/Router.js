import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import SingUp from "./SingUp";
import singIn from "./SingIn";
import App from "./App";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/singup" component={SingUp} />
          <Route path="/singin" component={singIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
