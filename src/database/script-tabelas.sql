CREATE DATABASE automobilismo;

USE automobilismo;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE carro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    montadora VARCHAR(50) NOT NULL,
    estilo VARCHAR(50) NOT NULL,
    ano CHAR(4) NOT NULL,
    tipoTracao VARCHAR(3) NOT NULL,
    classe VARCHAR(2) NOT NULL,
    pontuacao INT NOT NULL,
    velocidade DECIMAL(3,1) NOT NULL,
    aceleracao DECIMAL(3,1) NOT NULL,
    arrancada DECIMAL(3,1) NOT NULL,
    frenagem DECIMAL(3,1) NOT NULL,
    dirigibilidade DECIMAL(3,1) NOT NULL,
    offroad DECIMAL(3,1) NOT NULL
);

CREATE TABLE favorito(
	fk_usuario INT NOT NULL,
    fk_carro INT NOT NULL,
    PRIMARY KEY(fk_usuario, fk_carro),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_carro) REFERENCES carro(id)
);

INSERT INTO carro() VALUES
    (DEFAULT, 'kadett', 'chevrolet', 'original', '1984', 'FWD', 'D', 450, 5.8, 5.4, 6.2, 4.6, 6.3, 3.0),
    (DEFAULT, 'opala', 'chevrolet', 'original', '1971', 'RWD', 'C', 580, 6.1, 4.8, 5.7, 3.8, 4.7, 2.8),
    (DEFAULT, 'quattro', 'audi', 'rally', '1980', 'AWD', 'B', 680, 6.8, 6.9, 7.5, 6.4, 8.2, 8.7),
    (DEFAULT, 'eclipse', 'mitsubishi', 'jdm', '1998', 'AWD', 'A', 750, 7.2, 7.6, 8.0, 7.0, 7.8, 4.8),
    (DEFAULT, 'jesko', 'koenigsegg', 'hiper', '2019', 'RWD', 'S2', 998, 10.0, 9.9, 9.8, 9.6, 9.7, 4.2),
    (DEFAULT, 'charger', 'dodge', 'muscle', '1970', 'RWD', 'B', 650, 7.0, 6.2, 7.8, 4.8, 5.6, 3.5),
    (DEFAULT, 'f40', 'ferrari', 'original', '1993', 'RWD', 'S1', 860, 8.7, 8.5, 8.4, 8.0, 8.7, 3.8);