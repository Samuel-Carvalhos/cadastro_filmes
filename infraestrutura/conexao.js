const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "816359aA@",
  database: "cadastro_filmes",
});

module.exports = conexao;
