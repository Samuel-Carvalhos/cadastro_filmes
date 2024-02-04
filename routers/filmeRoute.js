const { Router } = require("express");
const router = Router();
const filmeController = require("../controllers/filmeController");

router.get("/filmes", (req, res) => {
  const resposta = filmeController.buscar();
  res.send(resposta);
});

router.post("/filmes", (req, res) => {
  const resposta = filmeController.cadastrar();
  res.send(resposta);
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
