import React from "react";
import ApiSignup from "./api/signup";
import { connect } from "react-redux";
import Router from "next/router";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.dispatcher = this.dispatcher.bind(this);
  }
  dispatcher(username, password) {
    this.props.dispatchUser(username, password);
  }
  submitHandler(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    username = username.replace(/ +/g, "");
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }
    if (!username || !password) {
      alert("You must fill out all the fields");
      return;
    }
    var newPromise = new Promise((resolve, reject) => {
      resolve(ApiSignup(username, password, this.dispatcher));
      //this will be dispatched once everything goes smoothly on the server side
    });
    newPromise.then(() => {
      Router.push("/");
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>Signup</h3>
          <label>Username: </label>
          <input type="text" id="username" name="username" />
          <label>Password: </label>
          <input type="password" id="password" name="password" />
          <label>Confirm Password: </label>
          <input type="password" id="confirm" name="confirm" />
          <input type="submit" value="submit" id="submit" />
        </form>
        <a href="/">&larr; back</a>
        <style jsx>{`
          form {
            width: 500px;
            height: 200px;
            justify-self: center;
            margin-left: auto;
            margin-right: auto;
          }
          form input {
            display: block;
          }
          #submit {
            margin-left: 35px;
            margin-top: 10px;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchUser: (username, password) =>
      dispatch({ type: "USERNAMEDISPATCH", username, password })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
