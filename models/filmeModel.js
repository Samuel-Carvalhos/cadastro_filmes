const conexao = require("../infraestrutura/conexao");
class FilmeModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  buscar() {
    const sql = "SELECT * FROM filmes";
    return this.executaQuery(sql);
  }

  cadastrar(novoFilme) {
    const sql = "INSERT INTO filmes (Data, descricao , classificacao, duracao) VALUES (?, ?, ?, ?);"
    console.log (novoFilme)
    return this.executaQuery(sql, [novoFilme.Data, novoFilme.descricao, novoFilme.classificacao, novoFilme.duracao]);
  }

  atualizar(filmeAtualizado, id) {
    const sql = "UPDATE filmes SET ? WHERE id = ?";
    return this.executaQuery(sql, [filmeAtualizado, id]);
  }

  excluir(id) {
    const sql = "DELETE FROM filmes WHERE id = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new FilmeModel();
