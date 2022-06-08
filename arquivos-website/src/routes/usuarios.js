var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/graficoVotos", function (req, res) {
    usuarioController.graficoVotos(req, res);
});

router.get("/qtdCadastros", function (req, res) {
    usuarioController.qtdCadastros(req, res);
});

router.post("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/voto", function (req, res) {
    usuarioController.votar(req, res);
});

module.exports = router;