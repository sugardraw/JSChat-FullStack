import React, { Component } from "react";
import User from "./User";
import axios from "axios";

class Users extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div
        className="col-md-3 m-0 p-0 bg-warning"
        style={{
          overflowY: "auto",
          height: "1000px",
          boxShadow: "-4px 24px 24px 10px #776f6fb0"
        }}
      >
        <div id="loggedUser" className="card">
          <div className="card-body">
            <img
              src="./images/avatar.png"
              width="50"
              height="50"
              alt="contact"
              className="float-left rounded-circle m-1"
            />
            YOU
            <div id="personal-settings">
              <button className="float-right btn">...</button>
              <button className="float-right btn">
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "white",
                    position: "relative",
                    top: "0.51rem",
                  }}
                >
                  {" "}
                  &#128929;
                </div>
              </button>
            </div>
          </div>
        </div>

        <User />
      </div>
    );
  }
}

export default Users;
