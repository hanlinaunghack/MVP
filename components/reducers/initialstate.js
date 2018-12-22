import Cookies from "universal-cookie";
import Store from "./store";
import moment from "moment";

const cookies = new Cookies();
const init = {
  _id: "",
  username: "",
  password: "",
  categories: ["All"],
  friends: [],
  images: []
};

const initialFetch = async () => {
  if (cookies.get("user")) {
    let username = cookies.get("user").username;
    let url = `/loginUser/${username}`;
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        cookies.set("user", data, { path: "/", maxAge: 60 * 60 });
        Store.dispatch({ type: "USERPROFILEDISPATCH", data });
      });
  }
};

export { initialFetch, cookies };
