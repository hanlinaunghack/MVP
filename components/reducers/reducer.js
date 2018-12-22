const initialState = {
  _id: "",
  username: "",
  password: "",
  categories: ["All"],
  friends: [],
  images: []
};

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
    case "DISPATCHIMAGE": //this gets the images of a given user
      let obj = action.data;
      return obj;
    case "USERPROFILEDISPATCH": //this gets all the info about the user after login
      let obj1 = action.data;
      return obj1;
    case "DISPATCHSIGNOUT":
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
