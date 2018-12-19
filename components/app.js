import React from "react";
import User from "./user";
import { connect } from "react-redux";
import { withRouter } from "next/router";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Welcome</h3>
        {this.props.username !== "" && <User username={this.props.username} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchUsername: username =>
      dispatch({ type: "USERNAMEDISPATCH", username })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
