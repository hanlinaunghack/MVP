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
      cb(username, password);
    } else {
      console.log("something went wrong");
    }
  });
};
