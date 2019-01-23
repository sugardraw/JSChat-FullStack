import React, { Component } from "react";
import io from "socket.io-client";
import Header from "./Header";
import PostsBoard from "./PostsBoard";
import Users from "./Users";
import axios from "axios";

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <Header />
        <div className="row">
          <Users token={this.props.token} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
