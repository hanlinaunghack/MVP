import React from "react";
import { connect } from "react-redux";
import apiUpload from "./api/upload";
import { withRouter } from "next/router";
import Images from "./images";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    let data = new FormData();
    let username = this.props.username;
    var dispatchFunction = this.props.dispatchImage;
    data.append("image", document.getElementById("upload").files[0]);
    data.append("username", username);
    data.append("access", document.getElementById("access").value);
    data.append("categories", document.getElementById("categories").value);
    apiUpload(data, username, dispatchFunction);
  }
  render() {
    return (
      <div>
        <div>Your Name is {this.props.username}</div>
        <form onSubmit={this.submitHandler}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="upload"
            name="upload"
          />
          <select id="access">
            <option value="private">Private</option>
            <option value="friends">Friends</option>
            <option value="public">Public</option>
          </select>
          <select id="categories">
            {this.props.categories.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          <input type="submit" value="submit" />
        </form>
        <h3>Images</h3>
        <div className="imageContainer">
          {this.props.images.length > 0 &&
            this.props.images.map((e, i) => (
              <Images key={i} value={e} indexValue={i} />
            ))}
        </div>
        <style jsx>{`
          .imageContainer {
            flex-grow: 1;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-content: flex-start;
            margin: auto;
            justify-content: flex-start;
            max-width: 1200px;
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
    dispatchImage: data => dispatch({ type: "DISPATCHIMAGE", data })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
