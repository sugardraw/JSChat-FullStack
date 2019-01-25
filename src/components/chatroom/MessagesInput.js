import React, { Component } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";
import io from "socket.io-client";

class MessagesInput extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      action: ""
    };
  }

  componentDidMount() {
    this.socket = io("/");
    this.socket.on("chat:typing", action => {
      console.log("****", action);
      this.setState({
        action: action
      });
    });
    this.socket.on("message", message => {
      this.setState({
        messages: [message, ...this.state.messages]
      });
    });
  }

  handleSubmit = e => {
    this.socket.emit("chat:typing", this.props.data.userName);
    const msgBody = e.target.value;
    if (e.keyCode === 13 && msgBody) {
      const message = {
        msgBody,
        from: this.props.data.userName
      };
      this.socket.emit("message", message);
      e.target.value = "";
    }
  };
  render() {
    const messages = this.state.messages.map((message, i) => {
      return (
        <table>
          <tr>
            <td className="m-3 col-xs-12 col-sm-9 col-md-9 w-100" />
            <td className="m-3 col-xs-12 col-sm-3 col-md-3 w-100">
              <div className="message-bubble m-3 col-xs-12 col-sm-3 col-md-3">
                <div key={i}>
                  <em>from:</em>
                  <b>{message.from}:</b>
                  <div>{message.msgBody}</div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      );
    });

    console.log(messages);

    return (
      <div className="m-2 p-2 mt-5 d-flex flex-fill flex-column align-items-center">
        <div className="postboard col-md-9">
          {this.state.action !== "" && (
            <div className="text-white ml-2 p-2 float-right">
              {this.state.action + " "}
              <em>is writing...</em>
            </div>
          )}

          {console.log(messages)}

          {messages}
        </div>

        <div className="messages col-md-9">
          <div className="ml-5 d-flex justify-content-around ">
            <input
              onChange={this.handleSubmit.bind(this)}
              onKeyUp={this.handleSubmit.bind(this)}
              className="form-control input-lg ml-1"
              id="message-input"
              type="text"
              placeholder="Write your message..."
            />
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "10px",
                width: "40px",
                height: "40px",
                display: "inline-block",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "6px"
              }}
            >
              <FaPaperclip size={19} />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "10px",
                marginRight: "17px",
                width: "40px",
                height: "40px",
                display: "inline-block",
                border: "1px solid white",
                borderRadius: "50%",
                padding: "6px"
              }}
            >
              <FaPaperPlane size={19} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesInput;
