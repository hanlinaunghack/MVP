import React from "react";
import { connect } from "react-redux";
import { fetchImage, deleteImage } from "./api/image";
import Cookies from "universal-cookie";
import Router from "next/router";

class ImagePage extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
    this.prevHandler = this.prevHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }
  componentDidMount() {
    let usercookies = new Cookies();
    let indexcookies = new Cookies();
    let username = usercookies.get("user");
    let index = indexcookies.get("index");
    username = username.username;
    fetchImage(username, data => {
      this.props.dispatchIndexData(data, index);
    });
  }
  prevHandler() {
    let indexcookies = new Cookies();
    let index = this.props.index;
    let length = this.props.images.length;
    let newIndex = (index + (length - 1)) % length;
    indexcookies.set("index", newIndex, { maxAge: 60 * 60 });
    this.props.dispatchIndex(newIndex);
    //no need to get the server involve, this is all local
  }
  nextHandler() {
    let indexcookies = new Cookies();
    let index = this.props.index;
    let length = this.props.images.length;
    const newIndex = (index + 1) % length;
    indexcookies.set("index", newIndex, { maxAge: 60 * 60 });
    this.props.dispatchIndex(newIndex);
  }
  deleteCallback(data) {
    var newPromise = new Promise((resolve, reject) => {
      resolve(this.props.dispatchIndexData(data));
    });
    newPromise.then(() => Router.push("/")).catch(err => console.error(err));
  }
  deleteHandler(e) {
    e.preventDefault();
    let username = this.props.username;
    let index = this.props.index;
    deleteImage(username, index, this.deleteCallback);
  }
  render() {
    return this.props.images.length > 0 ? (
      <div>
        <div className="thisContainer">
          <button onClick={this.prevHandler}>&larr;</button>
          <img src={this.props.images[this.props.index || 0].url} />
          <button onClick={this.nextHandler}>&rarr;</button>
        </div>
        <div className="thisContainer">
          <a href="/">&larr; back</a>
          <button onClick={this.deleteHandler}>Delete</button>
        </div>
        <style jsx>{`
          .thisContainer {
            display: flex;
            margin: auto;
            justify-content: center;
          }
          a {
            padding: 0 50px;
          }
        `}</style>
      </div>
    ) : (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchIndexData: (data, index) =>
      dispatch({ type: "DISPATCHINDEX", data, index }),
    dispatchIndex: index => dispatch({ type: "INDEX", index })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePage);
