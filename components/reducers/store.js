import Reducer from "./reducer";
import { applyMiddleware, createStore, compose } from "redux";
import { initialFetch, cookies } from "./initialstate";

const init = cookies.get("user") || {
  _id: "",
  username: "",
  password: "",
  categories: ["All"],
  friends: [],
  images: []
};

initialFetch();

const Store = createStore(Reducer, init);
export default Store;
