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
      return state;
    case "USERPROFILEDISPATCH": //this gets all the info about the user after login
      let obj = action.data;
      return obj;
    default:
      return state;
  }
};

module.exports = Reducer;
