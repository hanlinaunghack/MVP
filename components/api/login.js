import jsCookie from "js-cookie";

export default (username, password, cb) => {
  const url = "/loginUser";
  var obj = { username: username, password: password };
  obj = JSON.stringify(obj);
  const options = {
    method: "POST",
    body: obj
  };
  fetch(url, options).then(response => {
    if (response.status === 200) {
      jsCookie.set("token", response.token);
      fetch(url + "/" + username, { method: "GET" })
        .then(response => response.json())
        .then(data => cb(data));
    } else {
      console.log("something went wrong");
    }
  });
};
