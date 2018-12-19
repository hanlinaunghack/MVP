import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    Router.push(this.props.value.url);
  }
  render() {
    return (
      <div>
        <img src={this.props.value.url} onClick={this.clickHandler} />
        <style jsx>{`
          img {
            height: 100px;
            width: 100px;
            object-fit: contain;
          }
          img:hover {
            cursor: pointer;
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
    dispatchImage: image => dispatch({ type: "DISPATCHIMAGE", image })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
