const initialState = {
  _id: "",
  username: "",
  password: "",
  categories: ["All"],
  friends: [],
  images: []
};
import Cookies from "universal-cookie";

const Reducer = (state, action) => {
  switch (action.type) {
    case "USERNAMEDISPATCH": //this create a new user
      let username = action.username;
      let password = action.password;
      return {
        ...state,
        username,
        password,
        categories: ["All"],
        friends: [],
        images: []
      };
    case "DISPATCHINDEX":
      let index = action.index;
      let indexdata = action.data;
      let obj2 = Object.assign({}, state);
      obj2 = Object.assign(obj2, indexdata);
      obj2.index = index;
      return obj2;
    case "DISPATCHIMAGE": //this gets the images of a given user
      let actionObj = action.data;
      let obj = Object.assign({}, state);
      obj = Object.assign(obj, actionObj);
      return obj;
    case "USERPROFILEDISPATCH": //this gets all the info about the user after login
      let obj1 = action.data;
      return obj1;
    case "INDEX":
      let idx = Object.assign({}, state);
      idx.index = action.index;
      return idx;
    case "DISPATCHSIGNOUT":
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
