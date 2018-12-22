import React from "react";
import { connect } from "react-redux";
import apiLogin from "./api/login";
import Router from "next/router";
import { withRouter } from "next/router";
import Cookies from "universal-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.dispatchHandler = this.dispatchHandler.bind(this);
  }
  dispatchHandler(data, username) {
    const cookies = new Cookies();
    cookies.set("user", data, { path: "/", maxAge: 60 * 60 });
    this.props.dispatchUser(data);
  }
  submitHandler(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let newPromise = new Promise((resolve, reject) => {
      resolve(apiLogin(username, password, this.dispatchHandler));
    });
    newPromise.then(() => {
      Router.push("/");
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>Login</h3>
          <label>Username: </label>
          <input type="text" id="username" name="username" />
          <label>Password: </label>
          <input type="password" id="password" name="password" />
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
    dispatchUser: data => dispatch({ type: "USERPROFILEDISPATCH", data })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
