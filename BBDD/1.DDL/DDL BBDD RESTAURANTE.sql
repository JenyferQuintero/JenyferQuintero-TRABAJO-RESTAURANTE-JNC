-- Instrucciones para creación de base de datos:
-- 1. Ejecutar XAMPP
-- 2. Crear conexión con la extensión, si no la tienen la extensión se llama MySQL
-- Primero ejecutar esta línea!!
CREATE DATABASE BBDD_RESTAURANTE    
    DEFAULT CHARACTER SET = 'utf8mb4';

 USE BBDD_RESTAURANTE;
    
CREATE TABLE MESERO (
    ID_MESERO INT(10) PRIMARY KEY AUTO_INCREMENT,
    NOMBRE_MESERO VARCHAR(20),
    CONTRASENA    VARCHAR(20)
);  

CREATE TABLE CLIENTE (
    ID_CLIENTE INT(10) PRIMARY KEY AUTO_INCREMENT,
    TIPO_CLIENTE VARCHAR(20)
);

CREATE TABLE TIPO_PRODUCTO (
    ID_TIPO_PRODUCTO INT(10) PRIMARY KEY AUTO_INCREMENT,
    TIPO_NOMBRE VARCHAR(20)
);

CREATE TABLE CATEGORIA (
    ID_CATEGORIA INT(10) PRIMARY KEY AUTO_INCREMENT,
    CATEGORIA_NOMBRE VARCHAR(20)
);

CREATE TABLE PRODUCTO (
    ID_PRODUCTO INT(10) PRIMARY KEY AUTO_INCREMENT,
    PRODUCTO_NOMBRE VARCHAR(20),
    COSTO DECIMAL(5, 2),
    PRECIO DECIMAL(5, 2),
    ID_CATEGORIA INT(10),
    ID_TIPO_PRODUCTO INT(10),
    FOREIGN KEY (ID_CATEGORIA) REFERENCES CATEGORIA (ID_CATEGORIA),
    FOREIGN KEY (ID_TIPO_PRODUCTO) REFERENCES TIPO_PRODUCTO (ID_TIPO_PRODUCTO)
);
 
CREATE TABLE ORDEN (
    ID_ORDEN INT(10) PRIMARY KEY AUTO_INCREMENT,
    FECHA_HORA DATETIME,
    MESA VARCHAR(20),
    PROPINA DECIMAL(5, 2),
    ID_MESERO INT(10),
    ID_CLIENTE INT(10),
    FOREIGN KEY (ID_MESERO) REFERENCES MESERO (ID_MESERO),
    FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE) 
); 

CREATE TABLE ORDEN_PRODUCTO (
    ID_ORDEN_PRODUCTO INT(10) PRIMARY KEY AUTO_INCREMENT,
    ID_ORDEN INT(10),
    ID_PRODUCTO INT(10),
    FOREIGN KEY (ID_ORDEN) REFERENCES ORDEN (ID_ORDEN),
    FOREIGN KEY (ID_PRODUCTO) REFERENCES PRODUCTO (ID_PRODUCTO)
);


