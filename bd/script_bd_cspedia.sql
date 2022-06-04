create database cspedia;

use cspedia;

create table usuarios (idUsuario int auto_increment unique,
nick_name varchar(30),
email varchar(50),
senha varchar(30),
fkIndicacao varchar(30), foreign key (fkIndicacao) references usuarios (nick_name),
primary key(nick_name));

select * from usuarios;

select count(fkIndicacao) from usuarios where fkIndicacao = 'hariken';