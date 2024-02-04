const filmeModel = require("../models/filmeModel");
class filmeController {
  buscar() {
    return "Buscando Filmes...";
  }
  cadastrar(novoFilme) {
    return filmeModel.criar(novoFilme);
  }
  atualizar(id) {
    return "Atualizando filme número " + id + "...";
  }
  deletar(id) {
    return "Deletando filme número " + id + "...";
  }
}

module.exports = new filmeController();
