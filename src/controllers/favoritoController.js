var favoritoModel = require("../models/favoritoModel");

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    favoritoModel.listarPorUsuario(idUsuario)
        .then(function (resultado) { res.status(200).json(resultado); })
        .catch(function (erro) { console.log(erro); res.status(500).json(erro.sqlMessage); });
}

function favoritar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idCarro = req.body.idCarroServer;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (idCarro == undefined) {
        res.status(400).send("O idCarro está undefined!");
    } else {
        favoritoModel.favoritar(idUsuario, idCarro)
            .then(function (resultado) { res.status(201).json(resultado); })
            .catch(function (erro) {
                console.log(erro);
                if (erro.code == "ER_DUP_ENTRY") {
                    res.status(409).json("Esse carro já está nos seus favoritos!");
                } else {
                    res.status(500).json(erro.sqlMessage);
                }
            });
    }
}

function desfavoritar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idCarro = req.params.idCarro;

    favoritoModel.desfavoritar(idUsuario, idCarro)
        .then(function (resultado) { res.status(200).json(resultado); })
        .catch(function (erro) { console.log(erro); res.status(500).json(erro.sqlMessage); });
}

module.exports = { listarPorUsuario, favoritar, desfavoritar };