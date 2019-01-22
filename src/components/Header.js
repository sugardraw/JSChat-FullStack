import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header shadow">
        <div id="logo">
          <img
            className="m-2"
            width="60"
            height="60"
            src="./images/chat.svg"
            alt="logo"
          />
          <span>
            [FullStack].<em className="text-success">Chat</em>
          </span>

          <div className="window-buttons float-right">
            <Link to="/singup">
              <button className="btn">
                <span>Sign Up</span>
              </button>
            </Link>
            <Link to="/singin">
              {" "}
              <button className="btn last-button">
                <span>Sign In</span>
              </button>
            </Link>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
