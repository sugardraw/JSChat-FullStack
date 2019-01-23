import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IoIosContact, IoIosLogOut } from "react-icons/io";

class Header extends Component {
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
            <Link to="/signin">
              {" "}
              <div className="mt-3 float-right mr-3">
                <div style={{ color: "white" }}>
                  <IoIosLogOut size={33} />
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <div className="mt-3 float-right ">
                <div style={{ color: "white" }}>
                  <IoIosContact size={33}/>
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
