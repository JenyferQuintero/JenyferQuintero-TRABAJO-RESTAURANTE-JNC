

 -- Intrucciones de uso:
-- 1. Haber creado base de datos previamente
-- 2. Copiar y pegar carpeta de Carga Masiva ubicada en el repositorio en la siguiente ruta: C:\xampp\mysql\data
        USE BBDD_RESTAURANTE;

    -- Script para borrar datos de las tablas en caso de que la tabla ya cuente con registros

DELETE FROM PRODUCTO;
DELETE FROM ORDEN;
DELETE FROM MESERO;
DELETE FROM CLIENTE;
DELETE FROM TIPO_PRODUCTO;
DELETE FROM CATEGORIA;
DELETE FROM ORDEN_PRODUCTO; 

-- Reinicia el ID autoincrementable en 0 para que no hayan errores con el número de ID
ALTER TABLE producto AUTO_INCREMENT = 0;
ALTER TABLE orden AUTO_INCREMENT = 0;
ALTER TABLE Mesero AUTO_INCREMENT = 0;
ALTER TABLE Cliente AUTO_INCREMENT = 0;
ALTER TABLE Tipo_Producto AUTO_INCREMENT = 0;
ALTER TABLE Categoria AUTO_INCREMENT = 0;
ALTER TABLE ORDEN_PRODUCTO AUTO_INCREMENT = 0;

-- Carga masiva de tabla Mesero
LOAD DATA INFILE 'Carga Masiva/Mesero.csv'
REPLACE INTO TABLE Mesero
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(NOMBRE_MESERO, CONTRASENA); 
-- Carga masiva de tabla Cliente
LOAD DATA INFILE 'Carga Masiva/Cliente.csv'
REPLACE INTO TABLE Cliente
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(TIPO_CLIENTE);
-- Carga masiva de tabla Tipo_Producto
LOAD DATA INFILE 'Carga Masiva/Tipo_Producto.csv'
REPLACE INTO TABLE Tipo_Producto
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(TIPO_NOMBRE);
-- Carga masiva de tabla Categoria
LOAD DATA INFILE 'Carga Masiva/Categoria.csv'
REPLACE INTO TABLE Categoria
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(CATEGORIA_NOMBRE);
-- Carga masiva de tabla Producto
LOAD DATA INFILE 'Carga Masiva/PRODUCTO.csv'
REPLACE INTO TABLE producto
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(PRODUCTO_NOMBRE, COSTO, PRECIO, ID_CATEGORIA, ID_TIPO_PRODUCTO);
-- Carga masiva de tabla Orden
LOAD DATA INFILE 'Carga Masiva/Orden.csv'
REPLACE INTO TABLE orden
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(FECHA_HORA, MESA, PROPINA, ID_MESERO, ID_CLIENTE);
-- Carga masiva de tabla ORDE_PRODUCTO
LOAD DATA INFILE 'Carga Masiva/ORDEN_PRODUCTO.csv'
REPLACE INTO TABLE ORDEN_PRODUCTO
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n' 
IGNORE 1 LINES
(ID_ORDEN, ID_PRODUCTO);       

   