class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    //this.criarTabelaFilmes();
  }

  criarTabelaFilmes() {
    const sql = `
            create table if not exists filmes (
            id int not null auto_increment primary key,
            Data date,
            descricao varchar(100),
            classificacao varchar(100),
            duracao varchar(10)not null
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
