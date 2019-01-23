import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import SignUp from "./SignUp";
import signIn from "./SignIn";
import App from "./App";
import ChatRoom from "./chatroom/ChatRoom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={signIn} />
          <Route path="/chatroom" component={ChatRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
