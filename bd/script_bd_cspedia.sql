create database cspedia;

use cspedia;

create table usuarios (idUsuario int primary key auto_increment,
nick_name varchar(30),
email varchar(50),
senha varchar(30),
fkIndicacao int, foreign key (fkIndicacao) references usuarios (idUsuario),
indicado_por varchar(30));