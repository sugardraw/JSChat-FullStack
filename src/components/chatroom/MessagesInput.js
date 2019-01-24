import React, { Component } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";
import io from "socket.io-client";

class MessagesInput extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.socket = io("/");
    this.socket.on("message", message => {
      this.setState({
        messages: [message, ...this.state.messages]
      });
    });
  }

  handleSubmit = e => {
    const msgBody = e.target.value;

    if (e.keyCode === 13 && msgBody) {
      const message = {
        msgBody,
        from: "me"
      };
      this.socket.emit("message", msgBody);
      e.target.value = "";
    }
  };
  render() {
    const  messages  = this.state.messages.map((message, i)=>{
      return(
        <div key={i}>
          <b>{message.from}:</b>
          <div>{message.body}</div>
        </div>
      )
    })

    return (
      <div className="m-2 p-2 mt-5 d-flex flex-fill flex-column align-items-center">
        <div className="postboard col-md-9 ">{messages}</div>

        <div className="messages col-md-9">
          <div className="ml-5 d-flex justify-content-around ">
            <input
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
