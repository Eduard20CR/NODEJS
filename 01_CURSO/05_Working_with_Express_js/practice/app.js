const path = require("path");

const express = require("express");

const home = require("./routes/home");
const users = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(home);

app.use(users);

app.use((req, res, next) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000);
