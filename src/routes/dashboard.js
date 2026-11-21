var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/kpis", function (req, res) {
    dashboardController.buscarKpis(req, res);
});

router.get("/top5Favoritados", function (req, res) {
    dashboardController.buscarTop5Favoritados(req, res);
});

router.get("/percentualEstilos", function (req, res) {
    dashboardController.buscarPercentualEstilos(req, res);
});

module.exports = router;