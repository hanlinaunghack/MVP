export default (formdata, username, cb) => {
  const url = "/upload";
  const option = {
    method: "POST",
    body: formdata
  };
  fetch(url, option).then(response => {
    if (response.status == 200) {
      fetch(`/upload/${username}`, { method: "GET" })
        .then(res => res.json())
        .then(data => cb(data));
    }
  });
};
