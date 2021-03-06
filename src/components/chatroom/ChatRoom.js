import React, { Component } from "react";
import Header from "./Header";

import MessagesInput from "./MessagesInput";

import Users from "./Users";

import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

class ChatRoom extends Component {

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="container-fluid m-0 p-0">
          <Header data={JSON.parse(sessionStorage.getItem("data"))} />

          <div className="row">
            <Users data={JSON.parse(sessionStorage.getItem("data"))} />

            <MessagesInput data={JSON.parse(sessionStorage.getItem("data"))}/>
            
            <div className="col-md-3 w-100 fixed-bottom">
              {" "}
              <p className="text-muted fixed-bottom p-4">
                Made by Sergio Uslé García
              </p>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ChatRoom;
