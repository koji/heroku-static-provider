const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const app = express();

const user = process.env.USER;
const pass = process.env.PASS;
const PORT = 3000;

app.set("port", process.env.PORT || PORT);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(logger("dev"));
app.use(compression());
app.use(express.static(__dirname + "/public"));

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
