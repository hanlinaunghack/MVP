const User = require("./userdata");
const fs = require("fs");

exports.createUser = (username, password, res) => {
  User.findOne({ username }, (err, result) => {
    if (result) {
      console.log("User already Exists!");
    } else {
      var newUser = new User({
        username,
        password,
        categories: ["All"],
        friends: [],
        images: []
      });
      newUser.save((err, success) => {
        if (err) console.error(err);
        res.status(200).send("success");
      });
    }
  });
};

exports.loginUser = (obj, res) => {
  let username = obj.username;
  let password = obj.password;
  User.findOne({ username, password }, (err, result) => {
    if (err) console.error(err);
    if (result) {
      res.status(200).send("SUCCESS");
    } else {
      res.status(400).send("invalid combination");
    }
  });
};

exports.loginUserGet = (username, res) => {
  User.findOne({ username }, (err, result) => {
    if (err) console.error(err);
    if (result) {
      res.json(result);
    }
  });
};

exports.saveImage = (username, image, res) => {
  User.findOne({ username }, (err, result) => {
    if (err) console.error(err);
    if (result) {
      result.images = result.images.concat(image);
      result.save(err => {
        if (err) console.error(err);
        res.status(200).send("saved");
      });
    }
  });
};

exports.getImage = (username, res) => {
  User.findOne({ username }, (err, result) => {
    if (err) console.error(err);
    if (result) res.json(result);
  });
};

exports.imagepageGet = (username, res) => {
  User.findOne({ username }, (err, result) => {
    if (err) console.error(err);
    res.json(result);
  });
};

exports.deleteImage = (username, index, res) => {
  User.findOne({ username }, (err, result) => {
    if (err) console.error(err);
    result.images = result.images.filter((e, i) => i !== Number(index));
    result.save(errz => {
      if (errz) console.error(errz);
      res.json(result);
    });
  });
};
