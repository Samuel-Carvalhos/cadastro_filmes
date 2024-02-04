const conexao = require("../infraestrutura/conexao");
class FilmeModel {
  listar() {
    const sql = "SELECT * FROM filmes";
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.log("Aconteceu algum erro na hora de listar...");
          reject(error);
        }
        console.log("Ok!");
        resolve(resposta);
      });
    });
  }

  criar(novoFilme) {
    const sql = "INSERT INTO filmes SET ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, novoFilme, (error, resposta) => {
        if (error) {
          console.log("Aconteceu algum erro na hora de listar...");
          reject(error);
        }
        console.log("OK!");
        resolve(resposta);
      });
    });
  }
}

module.exports = new FilmeModel();
