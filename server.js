const next = require("next");
const path = require("path");

const {
  createUser,
  loginUser,
  loginUserGet,
  saveImage,
  getImage
} = require("./database/databaseQueries");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const parser = require("body-parser");
    const cors = require("cors");
    const fileUpload = require("express-fileupload");
    const fs = require("fs");
    const favicon = require("serve-favicon");

    server.use(parser.text());
    server.use(parser.json());
    server.use(parser.urlencoded({ extended: true }));
    server.use(cors());
    server.use(favicon(path.join(__dirname, "static", "favicon.ico")));
    server.use(
      fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        createParentPath: true,
        preserveExtension: true
      })
    );

    server.post("/upload", (req, res) => {
      if (Object.keys(req.files).length == 0)
        res.status(400).send("no file uploaded");
      let image = req.files.image;
      let username = req.body.username;
      let access = req.body.access;
      let categories = req.body.categories;
      let name = image.name.replace(/ +/g, "");
      let uploadPath = path.resolve(
        __dirname,
        `./static/images/${username}/${name}`
      );
      image.mv(uploadPath, err => {
        if (err) res.status(500).send(err);
        saveImage(
          username,
          { access, categories, url: `/static/images/${username}/${name}` },
          res
        );
      });
    });
    server.get("/upload/:username", (req, res) => {
      let username = req.params.username;
      getImage(username, res);
    });

    server.post("/createUser", (req, res) => {
      let obj = JSON.parse(req.body);
      let username = obj.username;
      let password = obj.password;
      createUser(username, password, res); //goes to database to create a new User with schema {username, password, images, friends}
    });

    server.post("/loginUser", (req, res) => {
      let obj = JSON.parse(req.body);
      loginUser(obj, res);
    });
    server.get("/loginUser/:username", (req, res) => {
      let username = req.params.username;
      loginUserGet(username, res);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
