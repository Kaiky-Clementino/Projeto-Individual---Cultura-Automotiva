var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT id, modelo, montadora, estilo, ano FROM carro;`;
    return database.executar(instrucaoSql);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// favorito = 1 se o usuário já favoritou o carro, 0 se não
function listarComFavoritos(idUsuario) {
    var instrucaoSql = `
        SELECT c.id, c.modelo, c.montadora, c.estilo, c.ano,
               IF(f.fk_usuario IS NULL, 0, 1) AS favorito
        FROM carro c
            LEFT JOIN favorito f
                ON f.fk_carro = c.id AND f.fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    listarComFavoritos
};