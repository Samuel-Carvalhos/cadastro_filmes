const {Router} = require("express");
const router = Router();

router.get("/filmes", (req, res) => {
    res.send("Listando Filme!");
})

router.post("/filmes", (req, res) => {
    res.send("Adicionando um novo filme!");
})

router.put("/filmes/:id", (req, res) => {
    const { id } = req.params;
    res.send("Atualizando Filme ${id}...")
});

router.delete("/filmes/:id", (req, res) => {
    const { id } = req.params;
    res.send("Atenção...Excluindo Filme!" + id + "...")
});

module.exports = router;