import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class PostsBoard extends Component {
  constructor() {
    super();
    this.state = {
      msg: {}
    };
    this.standardAnswer = false;
  }

  getMsg = e => {
    console.log(e.target.value, typeof e.target.value);
    let firstCharts = "";
    e.target.value.length > 10
      ? (firstCharts = e.target.value.substring(0, 20))
      : (firstCharts = e.target.value);
    console.log(firstCharts);

    const msg = {
      time: Date.now(),
      userId: this.props.conversation[0].userId,
      origin: "YOU",
      title: firstCharts,
      body: e.target.value
    };
    this.setState(state => {
      state.msg = msg;
      return state;
    });
  };

componentDidMount(){
  setTimeout(()=>{
    $("html,body").animate(
      { scrollTop: document.body.scrollHeight },
      "slow"
    );

  },1500)
 
}

  sendMsg = e => {
    e.preventDefault();
    axios
      .post(
        `http://127.0.0.1:3001/database/posts/addMsg/?title=${
          this.state.msg.title
        }&body=${this.state.msg.body}&origin=${this.state.msg.origin}&userId=${
          this.state.msg.userId
        }&time=${this.state.msg.time}`,
        {
          params: {
            time: Date.now(),
            userId: this.state.msg.userId,
            id: null,
            origin: "YOU",
            title: this.state.msg.title,
            body: this.state.msg.body
          }
        }
      )
      .then((res) => {
        console.log(res.data);

        this.props.getConversation(
          this.state.msg.userId,
          this.props.friendName
        );

        $("html,body").animate(
          { scrollTop: document.body.scrollHeight },
          "slow"
        );
    
      })
      .then(
        setTimeout(()=>{
          this.standardAnswer=true
          this.forceUpdate();
          $("html,body").animate(
            { scrollTop: document.body.scrollHeight },
            "slow"
          );
        },3000)

      )
      .catch(err => console.log(err));

    e.currentTarget.reset();
  };




  render() {
    return (
      <div className="col-md-9 m-0 p-0">
        <div className="bg-light   p-1">
          {this.props.friendName ? (
            <div>
              <h4 className="pl-2">{this.props.friendName}'s chat</h4>
              <div>
                {" "}
                <h6 className="card-title mb-2 text-muted pl-2">
                  {"friends list"}
                </h6>
                <div id="personal-settings">
                  <button
                    className="float-right btn bg-light"
                    style={{
                      fontSize: "1.8rem",
                      color: "grey",
                      top: "-4rem",
                      right: "1.2rem",
                      position: "relative",
                      marginLeft: "1.6rem"
                    }}
                  >
                    ...
                  </button>
                  <button
                    className="float-right btn bg-light"
                    style={{
                      fontSize: "1.8rem",
                      color: "grey",
                      top: "-3.4rem",
                      position: "relative",
                      marginLeft: "1.6rem",
                      transform: "scale(-1,1)"
                    }}
                  >
                    &#128206;
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {this.props.conversation.map((conversation, i) => {
          if (conversation.origin === "YOU") {
            return (
              <div
                key={i}
                id="talk-bubble-1"
                className="card position-relative my-3 shadow"
                style={{
                  maxWidth: "32rem",
                  marginLeft: "4vw",
                  backgroundColor: "rgb(230, 232, 199)"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">YOU</h5>
                  <p className="card-text">{conversation.body}</p>
                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      position: "relative",
                      float: "right",
                      marginRight: "12px"
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                id="talk-bubble-2"
                className="card position-relative my-3 shadow"
                style={{
                  maxWidth: "32rem",
                  marginLeft: "37vw",
                  backgroundColor: "rgb(146, 172, 241)"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">
                    {this.props.friendName}
                  </h5>
                  <h6 className="text-muted">{conversation.title}</h6>

                  <p className="card-text">{conversation.body}</p>

                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      position: "relative",
                      float: "right",
                      marginRight: "12px"
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>
            );
          }
        })}


        {this.standardAnswer &&  <div
                id="talk-bubble-2"
                className="card position-relative my-3 shadow"
                style={{
                  maxWidth: "32rem",
                  marginLeft: "37vw",
                  backgroundColor: "rgb(146, 172, 241)"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">
                  </h5>
                  <h6 className="text-muted"></h6>

                  <p className="card-text">standard answer</p>

                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      position: "relative",
                      float: "right",
                      marginRight: "12px"
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>}

        

        <form
          style={{ position: "fixed", width: "74vw", bottom: "0.2rem" }}
          action="/database/posts"
          method="POST"
          onSubmit={this.sendMsg}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control w-auto ml-2"
              aria-label="messages-input"
              placeholder="Write a message"
              onChange={this.getMsg}
              value={this.state.msg.body}
            />
            <button className="btn btn-info" type="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostsBoard;
