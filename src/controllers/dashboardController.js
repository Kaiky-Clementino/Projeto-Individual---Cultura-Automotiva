var dashboardModel = require("../models/dashboardModel");

function buscarKpis(req, res) {
    dashboardModel.buscarKpis()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarTop5Favoritados(req, res) {
    dashboardModel.buscarTop5Favoritados()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarPercentualEstilos(req, res) {
    dashboardModel.buscarPercentualEstilos()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    buscarKpis,
    buscarTop5Favoritados,
    buscarPercentualEstilos
};