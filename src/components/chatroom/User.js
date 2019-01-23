import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shadow">
        <div className="card">
          <div className="card-body">
            <img
              width="50"
              height="50"
              alt="contact"
              className="rounded-circle m-1 float-left "
            />
            <div
              style={{ marginLeft: "0rem", textAlign: "left" }}
              className="float-left px-3 py-1"
            />
            <div
              style={{
                marginLeft: "0rem",
                textAlign: "left",
                color: " rgb(162, 153, 144)"
              }}
              className="float-left px-3 py-1"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
