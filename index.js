const express = require("express");
const chalk = require("chalk");
let app = express();
var PORT = 3000;
if (PORT !== 3000) {
  throw new TypeError("PORT IS NOT 3000");
}
app.listen(PORT, () => {
  console.log(chalk.cyan("SERVER STARTED " + chalk.greenBright('http://localhost:3000')));
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main/index.html");
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/main/index.html");
});
app.get("/password-gen", (req, res) => {
  res.sendFile(__dirname + "/Password-Generator/web/main.html");
});
app.use(express.static(__dirname + "/Password-Generator/web"));
app.use(express.static(__dirname + "/main"));
app.use(express.static(__dirname + "/not-found"));
app.use((req, res) => {
    res.sendFile(__dirname + "/not-found/main.html");
});