class filmeController {
  buscar() {
    return "Buscando Filmes...";
  }
  cadastrar() {
    return "Cadastrando filme...";
  }
  atualizar(id) {
    return "Atualizando filme número " + id + "...";
  }
  deletar(id) {
    return "Deletando filme número " + id + "...";
  }
}

module.exports = new filmeController();
