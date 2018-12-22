export default (username, password, cb) => {
  const url = "/loginUser";
  var obj = { username: username, password: password };
  obj = JSON.stringify(obj);
  const options = {
    method: "POST",
    headers: {
      "Conetent-Type": "application/json",
      credentials: "include",
      Accept: "application/json"
    },
    body: obj
  };
  fetch(url, options).then(response => {
    if (response.status === 200) {
      fetch(url + "/" + username, { method: "GET" })
        .then(response => response.json())
        .then(data => cb(data, username));
    } else {
      console.log("something went wrong");
    }
  });
};
