var express = require("express");
var router = express.Router();

var carroController = require("../controllers/carroController");

router.get("/listar", function (req, res) {
    carroController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    carroController.listarComFavoritos(req, res);
});

router.post("/cadastrar", function (req, res) {
    carroController.cadastrar(req, res);
});

module.exports = router;