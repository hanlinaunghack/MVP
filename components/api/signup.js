import Cookies from "universal-cookie";

export default (username, password, cb) => {
  const url = "/createUser";
  var obj = { username: username, password: password };
  obj = JSON.stringify(obj);
  const options = {
    method: "POST",
    body: obj
  };
  fetch(url, options).then(response => {
    if (response.status === 200) {
      console.log("successfuly created User");
      const cookie = new Cookies();
      const data = {
        _id: "",
        username: "",
        password: "",
        categories: ["All"],
        friends: [],
        images: []
      };
      cookie.set("user", data, { path: "/", maxAge: 60 * 60 });
      cb(username, password);
    } else {
      console.log("something went wrong");
    }
  });
};
