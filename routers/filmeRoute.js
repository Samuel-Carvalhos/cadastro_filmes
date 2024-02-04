const { Router } = require("express");
const router = Router();
const filmeController = require("../controllers/filmeController");

router.get("/filmes", (req, res) => {
  const listaFilmes = filmeController.buscar();
  listaFilmes
    .then((filmes) => res.status(200).json(filmes))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/filmes", (req, res) => {
  const novoFilme = req.body;
  const filme = filmeController.cadastrar(novoFilme);
  filme
  .then((filmeCadastrado) => res.status(201).json(filmeCadastrado))
  .catch((error) => res.status(400).json(error.message));
});

router.put("/filmes/:id", (req, res) => {
  const { id } = req.params;
  const resposta = filmeController.atualizar(id);
  res.send(resposta);
});

router.delete("/filmes/:id", (req, res) => {
  const { id } = req.params;
  const resposta = filmeController.deletar(id);
  res.send(resposta);
});

module.exports = router;
