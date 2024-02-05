const filmeModel = require("../models/filmeModel");
class filmeController {
  buscar(req, res) {
    const listaFilmes = filmeModel.listar();
    return listaFilmes
      .then((filmes) => res.status(200).json(filmes))
      .catch((error) => res.status(400).json(error.message));
  }
  cadastrar(req, res) {
    const novoFilme = req.body;
    const filme = filmeModel.criar(novoFilme);
    return filme
      .then((filmeCadastrado) => res.status(201).json(filmeCadastrado))
      .catch((error) => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { id } = req.params;
    const filmeAtualizado = req.body;
    const filme = filmeModel.atualizar(filmeAtualizado, id);
    return filme
      .then((resultFilmeAtualizado) =>
        res.status(200).json(resultFilmeAtualizado)
      )
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { id } = req.params;
    const filme = filmeModel.delete(id);
    return filme
      .then((resultFilmeDeletado) => res.status(200).json(resultFilmeDeletado))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new filmeController();
