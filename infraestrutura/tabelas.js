class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    //this.criarTabelaFilmes();
  }

  criarTabelaFilmes() {
    const sql = `
            create table if not exists filmes (
              id int not null auto_increment primary key,
              nome_do_filme varchar(100)not null,
              descricao varchar(100)not null,
              duracao varchar(10)not null,
              classificacao varchar(100)not null
              );
            `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Aconteceu um erro na hora de criar a tabela");
        console.log(error.message);
        return;
      }
      console.log("Tabela criada com Sucesso!");
    });
  }
}

module.exports = new Tabelas();
