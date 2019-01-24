import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IoIosContact, IoIosLogOut } from "react-icons/io";



class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return { data: nextProps.data };
    } else {
      return null;
    }
  }


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
            <Link to="/">
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
                  <strong>

                    {" " + this.props.data.userName + " "}

                    </strong>
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
