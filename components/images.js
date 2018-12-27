import React from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import Router from "next/router";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    let index = this.props.indexValue;
    let cookies = new Cookies();
    cookies.set("index", index, { maxAge: 60 * 60 });
    Router.push("/image");
  }
  render() {
    return (
      <div>
        <img src={this.props.value.url} onClick={this.clickHandler} />
        <style jsx>{`
          img {
            height: 200px;
            width: 200px;
            object-fit: contain;
            display: inline-block;
            margin: 3px 5px;
            border: 1px solid black;
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
    dispatchIndex: index => dispatch({ type: "DISPATCHINDEX", index })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
