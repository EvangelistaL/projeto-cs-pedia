create database cspedia;

use cspedia;

create table usuarios (idUsuario int auto_increment unique,
nick_name varchar(30),
email varchar(50),
senha varchar(30),
fkIndicacao varchar(30), foreign key (fkIndicacao) references usuarios (nick_name),
primary key(nick_name));

create table times (idTime int auto_increment primary key,
nome_time varchar(30));

insert into times values (1, 'Furia'),
(2, 'Imperial'),
(3, 'paiN'),
(4, 'MIBR'),
(5, 'GODSENT');

create table voto_times (fkUsuario int, foreign key (fkUsuario) references usuarios (idUsuario),
fkTime int, foreign key (fkTime) references times (idTime),
voto int);

select * from voto_times;

select fkTime, sum(voto) as 'votos' from voto_times group by fkTime order by fkTime;
