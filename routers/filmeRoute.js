const { Router } = require("express");
const router = Router();
const filmeController = require("../controllers/filmeController");

router.get("/filmes", filmeController.buscar);

router.post("/filmes", filmeController.cadastrar);
 

router.put("/filmes/:id", filmeController.atualizar);
  

router.delete("/filmes/:id", filmeController.deletar);
  
module.exports = router;
