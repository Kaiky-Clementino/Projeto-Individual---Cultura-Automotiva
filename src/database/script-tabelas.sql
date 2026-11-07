CREATE DATABASE automobilismo;

USE automobilismo;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE carro (
	id INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(50) NOT NULL,
	montadora VARCHAR(50) NOT NULL,
    estilo VARCHAR(50) NOT NULL
);

CREATE TABLE favorito(
	fk_usuario INT NOT NULL,
    fk_carro INT NOT NULL,
    PRIMARY KEY(fk_usuario, fk_carro),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_carro) REFERENCES carro(id)
);

INSERT INTO carro() VALUES
	(DEFAULT, 'kadett', 'chevrolet', 'original'),
	(DEFAULT, 'opala', 'chevrolet', 'original'),
	(DEFAULT, 'gol gti', 'volkswagen', 'street'),
    (DEFAULT, 'f40', 'ferrari', 'original');
