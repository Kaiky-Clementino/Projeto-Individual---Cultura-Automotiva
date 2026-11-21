var database = require("../database/config");

function buscarKpis() {
    var instrucaoSql = `SELECT * FROM vw_kpis;`;
    return database.executar(instrucaoSql);
}

function buscarTop5Favoritados() {
    var instrucaoSql = `SELECT c.modelo, COUNT(*) AS favoritacoes FROM favorito f JOIN carro c ON c.id = f.fk_carro GROUP BY c.id, c.modelo ORDER BY favoritacoes DESC, c.modelo ASC LIMIT 5;`
    return database.executar(instrucaoSql);

}

function buscarPercentualEstilos() {
    var instrucaoSql = `
        SELECT
            c.estilo,
            COUNT(*) AS favoritacoes,
            ROUND(
                (COUNT(*) * 100.0) / (SELECT COUNT(*) FROM favorito),
                2
            ) AS percentual
        FROM favorito f
        JOIN carro c ON c.id = f.fk_carro
        GROUP BY c.estilo
        ORDER BY favoritacoes DESC, c.estilo ASC;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarKpis,
    buscarTop5Favoritados,
    buscarPercentualEstilos
};