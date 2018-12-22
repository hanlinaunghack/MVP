import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/friends">
          <a>Friends</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        {this.props.username ? (
          <Link href="/signout">
            <a>SignOut</a>
          </Link>
        ) : (
          <div />
        )}
        <style jsx>{`
          nav {
            padding: 5px;
          }
          nav a {
            padding-left: 10px;
            padding-right: 10px;
            font-size: 15px;
          }
        `}</style>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(Nav);
