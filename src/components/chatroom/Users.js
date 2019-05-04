import React, { Component } from "react";

import { IoIosContact } from "react-icons/io";
import io from "socket.io-client";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      loggedUsers: [],
      yourself: JSON.parse(sessionStorage.getItem("data"))
    };
  }
  componentDidMount() {
    this.socket = io("/");
    this.socket.on("login", action => {
      this.setState(state => {
        state.loggedUsers.push(action.userName);
      });
    });

    this.socket.on("logout", userName => {
      console.log(userName);
      this.setState(state => {
        var index = state.loggedUsers.indexOf(userName);
        if (index > -1) {
          state.loggedUsers.splice(index, 1);
          return state;
        } else {
          return null;
        }
      });
    });
  }
  render() {
    return (
      <div
        className="col-md-3 m-0 p-0 bg-warning"
        style={{
          overflowY: "auto",
          minHeight: "200px",
          boxShadow: "-4px 24px 24px 10px #776f6fb0",
          borderRadius: "5px"
        }}
      >
        {this.state.yourself && (
          <div id="loggedUser" className="card">
            <div className="card-body">
              <div id="personal-settings">
                <IoIosContact
                  className="float-left rounded-circle m-1"
                  size={45}
                />
                <div className="userName">{this.state.yourself.userName}</div>
                {/* <div className="buttons">
                  <button className="float-right btn">
                    <div
                      style={{
                        fontSize: "1.8rem",
                        color: "white",
                        position: "relative",
                        top: "0.51rem"
                      }}
                    >
                      {" "}
                      &#128929;
                    </div>
                  </button>
                  <button className="float-right btn">...</button>
                </div> */}
              </div>
            </div>
          </div>
        )}
        {this.state.loggedUsers.map((user, i) => (
          <div id="loggedUser" className="card">
            <div className="card-body">
              <div id="personal-settings">
                <IoIosContact
                  className="float-left rounded-circle m-1"
                  size={45}
                />
                <div className="userName">{user}</div>
                {/* <div className="buttons">
              
                  <button className="float-right btn">
                    <div
                      style={{
                        fontSize: "1.8rem",
                        color: "white",
                        position: "relative",
                        top: "0.51rem"
                      }}
                    >
                      {" "}
                      &#128929;
                    </div>
                  </button>
                  <button className="float-right btn">...</button>
                </div> */}
              </div>
            </div>
          </div>
        ))}


      </div>
    );
  }
}

export default Users;
