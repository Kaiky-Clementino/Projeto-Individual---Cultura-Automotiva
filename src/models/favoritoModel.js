var database = require("../database/config");

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT c.id, c.modelo, c.montadora, c.estilo
        FROM favorito f
            INNER JOIN carro c ON f.fk_carro = c.id
        WHERE f.fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function favoritar(idUsuario, idCarro) {
    var instrucaoSql = `
        INSERT INTO favorito (fk_usuario, fk_carro) VALUES (${idUsuario}, ${idCarro});
    `;
    return database.executar(instrucaoSql);
}

function desfavoritar(idUsuario, idCarro) {
    var instrucaoSql = `
        DELETE FROM favorito WHERE fk_usuario = ${idUsuario} AND fk_carro = ${idCarro};
    `;
    return database.executar(instrucaoSql);
}

module.exports = { listarPorUsuario, favoritar, desfavoritar };