import Reducer from "./reducer";
import { applyMiddleware, createStore, compose } from "redux";
import Cookies from "cookies-js";
import { createCookieMiddleware } from "redux-cookie";

const init = {
  _id: "",
  username: "",
  password: "",
  categories: ["All"],
  friends: [],
  images: []
};
const store = createStore(
  reducer,
  applyMiddleware(createCookieMiddleware(Cookies, "/redux/cookie/"))
);

const Store = createStore(Reducer, init);
export default Store;
