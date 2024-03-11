const express = require("express");
const app = express();
const port = 3000;
const appCustom = require("./config/appCustom");

appCustom(app, express);

app.listen(port, (error) => {
  if (error) {
    console.log("Erro");
    return;
  }
  console.log("Tudo Certo!");
});
