import React from "react";
import { connect } from "react-redux";

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return !this.props.username ? (
      <div>Please sign in first.</div>
    ) : (
      <div>your name is {this.props.username}</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchFriend: data => dispatch({ type: "DISPATCHFRIENDS", data })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
