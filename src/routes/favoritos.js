var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.get("/listar/:idUsuario", function (req, res) {
    favoritoController.listarPorUsuario(req, res);
});

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
});

router.delete("/desfavoritar/:idUsuario/:idCarro", function (req, res) {
    favoritoController.desfavoritar(req, res);
});

module.exports = router;