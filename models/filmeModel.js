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
    const sql = "INSERT INTO filmes (nome_do_filme, descricao, duracao, classificacao ) VALUES (?, ?, ?, ? )";
    console.log (novoFilme)
    return this.executaQuery(sql, [novoFilme.nome_do_filme, novoFilme.descricao, novoFilme.duracao, novoFilme.classificacao]);
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
