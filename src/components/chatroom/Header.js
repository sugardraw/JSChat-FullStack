import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IoIosContact, IoIosLogOut } from "react-icons/io";
import io from "socket.io-client";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.data !== prevState.data) {
      return { data: nextProps.data };
    } else {
      return null;
    }
  }

  logOut = () => {
    console.log("LOGOUT")
    this.socket = io("/");
    this.socket.emit("logout", this.props.data.userName);
    sessionStorage.clear();
  };

  render() {
    return (
      <div className="header shadow bg-warning">
        <div id="logo">
          <img
            className="m-2"
            width="60"
            height="60"
            src="./images/chat.svg"
            alt="logo"
          />
          <span>
            [FullStack].<em className="text-success">ChatRoom</em>
          </span>

          <div className="window-buttons float-right">
            <Link to="/" onClick={this.logOut}>
              {" "}
              <div className="mt-3 float-right">
                <div style={{ color: "white" }}>
                  <IoIosLogOut size={30} />
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <div className="mt-3 float-right">
                <div style={{ color: "white" }}>
                  Welcome
                  <strong>{" " + this.props.data.userName + " "}</strong>
                  <IoIosContact size={30} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
