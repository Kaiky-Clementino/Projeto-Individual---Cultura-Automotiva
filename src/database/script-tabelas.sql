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
	ano CHAR(4) NOT NULL
);

CREATE TABLE favorito(
	fk_usuario INT NOT NULL,
    fk_carro INT NOT NULL,
    PRIMARY KEY(fk_usuario, fk_carro),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_carro) REFERENCES carro(id)
);

INSERT INTO carro() VALUES
	(DEFAULT, 'kadett', 'chevrolet', 'original', '1984'),
	(DEFAULT, 'opala', 'chevrolet', 'original', '1971'),
	(DEFAULT, 'quattro', 'audi', 'rally', '1980'),
	(DEFAULT, 'eclipse', 'mitsubishi', 'jdm', '1998'),
	(DEFAULT, 'jesko', 'koenigsegg', 'hiper', '2019'),
	(DEFAULT, 'charger', 'dodge', 'muscle', '1970'),
    (DEFAULT, 'f40', 'ferrari', 'original', '1993');
