CREATE DATABASE  ecommerce;
use ecommerce;

create table usuarios (
		-- atributo tipo_dato longitud_datos --
		id_usuario int primary key auto_increment,
        nombre_usuario VARCHAR (20),
        apellidos_usuario VARCHAR (20),
        fecha_nacimiento_usuario DATE,
        email_ VARCHAR (100),
        clave VARCHAR (255)
);
 -- insertar un solo usuario --
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email_, clave)
VALUES ("juan","david","juandavid@gmail.com","juandavid12");

-- insertar varios usuario a la vez--
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email_, clave)
VALUES
 ("daivi","yosep","deivi12@gmail.com","devi123"),
("andres","alpizo","andresalpizo12@gmail.com","alpizo123"),
("clara","lozano","lozano1@gmail.com","lozano123"),
("ela","carrion","elacarrion1@gmail.com","elacarrion123"),
("ameri","kt","elamerikt@gmail.com","4kt"),
("fer","payan","ferpan@gmail.com","ferpan123");

select * from usuarios;