import React from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";

class Signout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatchUsername();
    const cookies = new Cookies();
    cookies.remove("user");
  }
  render() {
    return <div>Signout Complete. Have a nice day.</div>;
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchUsername: () => dispatch({ type: "DISPATCHSIGNOUT" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signout);
