export const fetchImage = (username, cb) => {
  let url = `/imagepage/${username}`;
  fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(data => cb(data));
};

export const deleteImage = (username, index, cb) => {
  let url = `/deleteimage`;
  let str = JSON.stringify({ username: username, index: index });
  let option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: str
  };
  fetch(url, option)
    .then(response => response.json())
    .then(data => cb(data));
};
