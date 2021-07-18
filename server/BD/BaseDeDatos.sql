CREATE DATABASE  IF NOT EXISTS `salarios` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `salarios`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: salarios
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `actividad_de_empleado`
--

DROP TABLE IF EXISTS `actividad_de_empleado`;
/*!50001 DROP VIEW IF EXISTS `actividad_de_empleado`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `actividad_de_empleado` AS SELECT 
 1 AS `cod_Registros_Emp`,
 1 AS `Nro_Empleado`,
 1 AS `Nombre`,
 1 AS `Celular`,
 1 AS `Direccion`,
 1 AS `Horas_Extras`,
 1 AS `Dias_Puntual`,
 1 AS `Dias_Atrasado`,
 1 AS `Dias_que_Falto`,
 1 AS `Dias_Totales`,
 1 AS `Anhos_De_Antiguedad`,
 1 AS `Mes_de_informacion`,
 1 AS `Rol`,
 1 AS `Departamento`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `Cod_Admi` int NOT NULL AUTO_INCREMENT,
  `User_Name` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `User_Email` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `User_password` varchar(80) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Cod_Emp` int DEFAULT NULL,
  `Acceso` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`Cod_Admi`),
  KEY `fk_idEmpleado_idx` (`Cod_Emp`),
  CONSTRAINT `fk_idEmpleado` FOREIGN KEY (`Cod_Emp`) REFERENCES `empleados` (`Cod_Emp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (2,'JuanAdmi1','juan.admi@gmail.com','12345',1,'Admi'),(7,'julia','julia.2@gmail.com','123456',3,'Empleado'),(9,'joel5','joel5@gmail.com','123456',5,'Empleado');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `adminview`
--

DROP TABLE IF EXISTS `adminview`;
/*!50001 DROP VIEW IF EXISTS `adminview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `adminview` AS SELECT 
 1 AS `Codigo`,
 1 AS `Usuario`,
 1 AS `contraseña`,
 1 AS `Nombre_Emp`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `beneficios_informe`
--

DROP TABLE IF EXISTS `beneficios_informe`;
/*!50001 DROP VIEW IF EXISTS `beneficios_informe`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `beneficios_informe` AS SELECT 
 1 AS `Nro_Empleado`,
 1 AS `nombre`,
 1 AS `Anhos_Antiguedad`,
 1 AS `porcentaje_Antiguedad`,
 1 AS `Beneficio_Antiguedad`,
 1 AS `Horas_Extras`,
 1 AS `Pago_Horas_Extras`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `Cod_Dep` int NOT NULL AUTO_INCREMENT,
  `Nombre_Dep` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`Cod_Dep`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'financiero'),(2,'marketing'),(3,'comercial'),(4,'control de gestion'),(5,'Direccion general'),(6,'compras');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descuento`
--

DROP TABLE IF EXISTS `descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descuento` (
  `Cod_Descuento` int NOT NULL AUTO_INCREMENT,
  `Nombre_Des` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Porcentaje_Des` float DEFAULT NULL,
  PRIMARY KEY (`Cod_Descuento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descuento`
--

LOCK TABLES `descuento` WRITE;
/*!40000 ALTER TABLE `descuento` DISABLE KEYS */;
INSERT INTO `descuento` VALUES (1,'Pensiones',0.1271),(2,'Seguro_Salud',0.0171);
/*!40000 ALTER TABLE `descuento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `descuentos_que_pagan`
--

DROP TABLE IF EXISTS `descuentos_que_pagan`;
/*!50001 DROP VIEW IF EXISTS `descuentos_que_pagan`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `descuentos_que_pagan` AS SELECT 
 1 AS `Nro_Empleado`,
 1 AS `Empleado`,
 1 AS `Descuento`,
 1 AS `Porcentaje`,
 1 AS `Descuentos_a_Pagar_Total`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `Cod_Emp` int NOT NULL AUTO_INCREMENT,
  `Nombre_Emp` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Celular` int DEFAULT NULL,
  `Direccion` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Cod_Dep` int DEFAULT NULL,
  `Cod_Rol` int DEFAULT NULL,
  `Cod_Sueldo` int DEFAULT NULL,
  PRIMARY KEY (`Cod_Emp`),
  KEY `fk_empl_rol_idx` (`Cod_Rol`),
  KEY `fk_empl_sueldo_idx` (`Cod_Sueldo`),
  KEY `fk_empl_dep_idx` (`Cod_Dep`),
  CONSTRAINT `fk_empl_dep` FOREIGN KEY (`Cod_Dep`) REFERENCES `departamento` (`Cod_Dep`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_empl_rol` FOREIGN KEY (`Cod_Rol`) REFERENCES `rol` (`Cod_Rol`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_empl_sueldo` FOREIGN KEY (`Cod_Sueldo`) REFERENCES `sueldo` (`Cod_Sueldo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'julian1',78965421,'Loa #500',1,1,5),(2,'juan',78985421,'Loa #501',2,2,4),(3,'julia',79965421,'Loa #505',3,3,3),(4,'jose',79965721,'Loa #507',4,4,2),(5,'joel',79965721,'Loa #507',5,5,1),(9,'Ricardo',78965421,'Loa #550',2,2,4),(17,'enrique',78945613,'Loa #32',1,2,3),(18,'Leonardo',78946513,'Loa #600',1,2,3),(19,'leo',789456123,'Loa#333',1,2,3);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `Cod_Factura` int NOT NULL AUTO_INCREMENT,
  `Empresa_Factura` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Cantidad_Factura` float DEFAULT NULL,
  PRIMARY KEY (`Cod_Factura`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
INSERT INTO `factura` VALUES (1,'Entel',10),(2,'viva',50),(3,'viva',60),(4,'viva',80),(5,'viva',80),(6,'viva',50.5),(7,'viva',45.5),(8,'viva',80.5),(9,'viva',49.5),(10,'viva',70),(11,'viva',25),(12,'viva',40),(13,'viva',85),(14,'viva',99);
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!50001 DROP VIEW IF EXISTS `facturas`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `facturas` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `nombre`,
 1 AS `Codigo_Factura`,
 1 AS `empresa_factura`,
 1 AS `Cantidad`,
 1 AS `Mes_Descargo`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `facturas_presentadas`
--

DROP TABLE IF EXISTS `facturas_presentadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas_presentadas` (
  `Cod_FacturasPresentadas` int NOT NULL AUTO_INCREMENT,
  `Cod_Factura` int DEFAULT NULL,
  `Mes_Emision` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Mes_Descargo` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Cod_Empleados` int DEFAULT NULL,
  PRIMARY KEY (`Cod_FacturasPresentadas`),
  KEY `fk_facturas_Presentadas_idx` (`Cod_Factura`),
  KEY `fk_Empleados_idx` (`Cod_Empleados`),
  CONSTRAINT `fk_Empleados` FOREIGN KEY (`Cod_Empleados`) REFERENCES `empleados` (`Cod_Emp`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_facturas_Presentadas` FOREIGN KEY (`Cod_Factura`) REFERENCES `factura` (`Cod_Factura`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas_presentadas`
--

LOCK TABLES `facturas_presentadas` WRITE;
/*!40000 ALTER TABLE `facturas_presentadas` DISABLE KEYS */;
INSERT INTO `facturas_presentadas` VALUES (1,1,'Mayo','Junio',1),(2,2,'Mayo','Junio',1),(3,3,'Mayo','Junio',1),(4,4,'Mayo','Junio',1),(5,5,'Mayo','Junio',1),(6,6,'Mayo','Junio',1),(7,7,'Mayo','Junio',1),(8,8,'Mayo','Junio',1),(9,9,'Mayo','Junio',1),(10,2,'Mayo','Junio',2),(11,3,'Mayo','Junio',2),(12,4,'Mayo','Junio',2),(13,5,'Mayo','Junio',2),(14,6,'Mayo','Junio',2),(15,7,'Mayo','Junio',2),(16,8,'Mayo','Junio',2),(17,9,'Mayo','Junio',2),(19,1,'Mayo','Junio',3),(21,1,'Mayo','Junio',3),(22,2,'Mayo','Junio',3),(23,1,'julio','Agosto',1),(24,2,'Julio','Agosto',1),(25,5,'Junio','Julio',1),(26,5,'Mayo','Junio',3),(28,5,'Junio','Julio',3),(29,5,'Mayo','Junio',3);
/*!40000 ALTER TABLE `facturas_presentadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `impuesto`
--

DROP TABLE IF EXISTS `impuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `impuesto` (
  `Cod_Imp` int NOT NULL AUTO_INCREMENT,
  `Nombre_Imp` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Porcentaje_Imp` float DEFAULT NULL,
  PRIMARY KEY (`Cod_Imp`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `impuesto`
--

LOCK TABLES `impuesto` WRITE;
/*!40000 ALTER TABLE `impuesto` DISABLE KEYS */;
INSERT INTO `impuesto` VALUES (1,'IVA',0.13),(2,'AFP GSP',0.05);
/*!40000 ALTER TABLE `impuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `impuestos_que_pagan`
--

DROP TABLE IF EXISTS `impuestos_que_pagan`;
/*!50001 DROP VIEW IF EXISTS `impuestos_que_pagan`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `impuestos_que_pagan` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `Empleado`,
 1 AS `Nombre_impuesto`,
 1 AS `Porcentaje_Impuesto`,
 1 AS `Impuestos_a_Pagar`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `registros_emp`
--

DROP TABLE IF EXISTS `registros_emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros_emp` (
  `cod_Registros_Emp` int NOT NULL AUTO_INCREMENT,
  `Cod_Emp` int DEFAULT NULL,
  `Horas_Extras` int DEFAULT NULL,
  `Dias_P` int DEFAULT NULL,
  `Dias_A` int DEFAULT NULL,
  `Dias_F` int DEFAULT NULL,
  `Dias_Totales` int DEFAULT NULL,
  `Mes_vigente` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `Anhos_Antiguedad` int DEFAULT NULL,
  PRIMARY KEY (`cod_Registros_Emp`),
  KEY `fk_Reg_Emp_idx` (`Cod_Emp`),
  CONSTRAINT `fk_Reg_Emp` FOREIGN KEY (`Cod_Emp`) REFERENCES `empleados` (`Cod_Emp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros_emp`
--

LOCK TABLES `registros_emp` WRITE;
/*!40000 ALTER TABLE `registros_emp` DISABLE KEYS */;
INSERT INTO `registros_emp` VALUES (2,2,11,26,4,0,30,'junio',9),(3,3,10,25,4,1,30,'junio',10),(4,4,15,28,1,1,30,'junio',5),(5,5,10,24,4,2,30,'junio',10),(6,1,6,25,1,4,30,'julio',8),(7,2,15,26,4,0,30,'julio',9),(8,3,15,25,4,1,30,'julio',10),(9,4,10,28,1,1,30,'julio',5),(10,5,18,24,4,2,30,'julio',10),(17,1,15,28,2,1,31,'Agosto',8);
/*!40000 ALTER TABLE `registros_emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `Cod_Rol` int NOT NULL AUTO_INCREMENT,
  `Nombre_Rol` varchar(45) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`Cod_Rol`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'especialista'),(2,'El_lider'),(3,'El_coordinador'),(4,'El_investigador'),(5,'El_motivador');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sueldo`
--

DROP TABLE IF EXISTS `sueldo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sueldo` (
  `Cod_Sueldo` int NOT NULL AUTO_INCREMENT,
  `Cant_Sueldo_Dia` int DEFAULT NULL,
  `Cant_Sueldo_Horas_Extras` int DEFAULT NULL,
  PRIMARY KEY (`Cod_Sueldo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sueldo`
--

LOCK TABLES `sueldo` WRITE;
/*!40000 ALTER TABLE `sueldo` DISABLE KEYS */;
INSERT INTO `sueldo` VALUES (1,147,25),(2,160,25),(3,180,25),(4,185,25),(5,190,25),(7,200,30),(8,150,25),(11,156,100),(12,154,20),(13,105,10);
/*!40000 ALTER TABLE `sueldo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sueldo_paga_descuento`
--

DROP TABLE IF EXISTS `sueldo_paga_descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sueldo_paga_descuento` (
  `Cod_Sueldo` int NOT NULL,
  `Cod_Descuentos` int NOT NULL,
  PRIMARY KEY (`Cod_Sueldo`,`Cod_Descuentos`),
  KEY `fk_sueldo_has_descuento_descuento1_idx` (`Cod_Descuentos`),
  KEY `fk_sueldo_has_descuento_sueldo1_idx` (`Cod_Sueldo`),
  CONSTRAINT `fk_sueldo_has_descuento_descuento1` FOREIGN KEY (`Cod_Descuentos`) REFERENCES `descuento` (`Cod_Descuento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_sueldo_has_descuento_sueldo1` FOREIGN KEY (`Cod_Sueldo`) REFERENCES `sueldo` (`Cod_Sueldo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sueldo_paga_descuento`
--

LOCK TABLES `sueldo_paga_descuento` WRITE;
/*!40000 ALTER TABLE `sueldo_paga_descuento` DISABLE KEYS */;
INSERT INTO `sueldo_paga_descuento` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(7,1),(8,1),(11,1),(12,1),(13,1),(1,2),(2,2),(3,2),(4,2),(5,2),(7,2),(8,2),(11,2),(12,2),(13,2);
/*!40000 ALTER TABLE `sueldo_paga_descuento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sueldo_paga_impuesto`
--

DROP TABLE IF EXISTS `sueldo_paga_impuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sueldo_paga_impuesto` (
  `Cod_Sueldo` int NOT NULL,
  `Cod_Imp` int NOT NULL,
  PRIMARY KEY (`Cod_Sueldo`,`Cod_Imp`),
  KEY `fk_sueldo_has_impuesto_impuesto1_idx` (`Cod_Imp`),
  KEY `fk_sueldo_has_impuesto_sueldo1_idx` (`Cod_Sueldo`),
  CONSTRAINT `fk_sueldo_has_impuesto_impuesto1` FOREIGN KEY (`Cod_Imp`) REFERENCES `impuesto` (`Cod_Imp`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_sueldo_has_impuesto_sueldo1` FOREIGN KEY (`Cod_Sueldo`) REFERENCES `sueldo` (`Cod_Sueldo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sueldo_paga_impuesto`
--

LOCK TABLES `sueldo_paga_impuesto` WRITE;
/*!40000 ALTER TABLE `sueldo_paga_impuesto` DISABLE KEYS */;
INSERT INTO `sueldo_paga_impuesto` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(7,1),(8,1),(11,1),(12,1),(13,1),(1,2),(2,2),(3,2),(4,2),(5,2),(7,2),(8,2),(11,2),(12,2),(13,2);
/*!40000 ALTER TABLE `sueldo_paga_impuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `total_sueldo_dias`
--

DROP TABLE IF EXISTS `total_sueldo_dias`;
/*!50001 DROP VIEW IF EXISTS `total_sueldo_dias`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `total_sueldo_dias` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `Empleado`,
 1 AS `Sueldo_Total`,
 1 AS `Pago_Horas_Extras`,
 1 AS `Beneficio_Antiguedad`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `total_sueldo_dias_informe`
--

DROP TABLE IF EXISTS `total_sueldo_dias_informe`;
/*!50001 DROP VIEW IF EXISTS `total_sueldo_dias_informe`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `total_sueldo_dias_informe` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `nombre`,
 1 AS `Dias_Puntual`,
 1 AS `Pago_Dias_Puntual`,
 1 AS `Dias_Atrasado`,
 1 AS `Pago_Dias_Atraso`,
 1 AS `Dias_No_Cobrados`,
 1 AS `Pago_Dias_Faltados`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `total_sueldo_informe`
--

DROP TABLE IF EXISTS `total_sueldo_informe`;
/*!50001 DROP VIEW IF EXISTS `total_sueldo_informe`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `total_sueldo_informe` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `Empleado`,
 1 AS `Sueldo_Total`,
 1 AS `Pago_Horas_Extras`,
 1 AS `Beneficio_Antiguedad`,
 1 AS `Descuentos`,
 1 AS `Impuestos`,
 1 AS `Impuestos_pagados_con_facturas`,
 1 AS `Total_a_pagar`,
 1 AS `Total_a_pagar_Con_facturas`,
 1 AS `mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `viewfacturas`
--

DROP TABLE IF EXISTS `viewfacturas`;
/*!50001 DROP VIEW IF EXISTS `viewfacturas`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `viewfacturas` AS SELECT 
 1 AS `nro_Empleado`,
 1 AS `nombre`,
 1 AS `Codigo_Factura`,
 1 AS `empresa_factura`,
 1 AS `Cantidad`,
 1 AS `Mes_Descargo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `viewinv`
--

DROP TABLE IF EXISTS `viewinv`;
/*!50001 DROP VIEW IF EXISTS `viewinv`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `viewinv` AS SELECT 
 1 AS `Pagos_este_mes`,
 1 AS `Mes`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vista_bd_completa`
--

DROP TABLE IF EXISTS `vista_bd_completa`;
/*!50001 DROP VIEW IF EXISTS `vista_bd_completa`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_bd_completa` AS SELECT 
 1 AS `Cod_Emp`,
 1 AS `Nombre_Emp`,
 1 AS `Celular`,
 1 AS `Direccion`,
 1 AS `Horas_Extras`,
 1 AS `Dias_Totales`,
 1 AS `Años_Antiguedad`,
 1 AS `Mes_vigente`,
 1 AS `Nombre_Rol`,
 1 AS `Nombre_Dep`,
 1 AS `Cant_Sueldo_Dia`,
 1 AS `Cant_Sueldo_Horas_Extras`,
 1 AS `Nombre_Des`,
 1 AS `Porcentaje_Des`,
 1 AS `Nombre_imp`,
 1 AS `Porcentaje_Imp`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `actividad_de_empleado`
--

/*!50001 DROP VIEW IF EXISTS `actividad_de_empleado`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `actividad_de_empleado` AS select `re`.`cod_Registros_Emp` AS `cod_Registros_Emp`,`e`.`Cod_Emp` AS `Nro_Empleado`,`e`.`Nombre_Emp` AS `Nombre`,`e`.`Celular` AS `Celular`,`e`.`Direccion` AS `Direccion`,`re`.`Horas_Extras` AS `Horas_Extras`,`re`.`Dias_P` AS `Dias_Puntual`,`re`.`Dias_A` AS `Dias_Atrasado`,`re`.`Dias_F` AS `Dias_que_Falto`,`re`.`Dias_Totales` AS `Dias_Totales`,`re`.`Anhos_Antiguedad` AS `Anhos_De_Antiguedad`,`re`.`Mes_vigente` AS `Mes_de_informacion`,`r`.`Nombre_Rol` AS `Rol`,`d`.`Nombre_Dep` AS `Departamento` from (((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `adminview`
--

/*!50001 DROP VIEW IF EXISTS `adminview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `adminview` AS select `admi`.`Cod_Admi` AS `Codigo`,`admi`.`User_Name` AS `Usuario`,`admi`.`User_password` AS `contraseña`,`emp`.`Nombre_Emp` AS `Nombre_Emp` from (`administradores` `admi` join `empleados` `emp` on((`admi`.`Cod_Emp` = `emp`.`Cod_Emp`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `beneficios_informe`
--

/*!50001 DROP VIEW IF EXISTS `beneficios_informe`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `beneficios_informe` AS select `e`.`Cod_Emp` AS `Nro_Empleado`,`e`.`Nombre_Emp` AS `nombre`,`re`.`Anhos_Antiguedad` AS `Anhos_Antiguedad`,`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) AS `porcentaje_Antiguedad`,round((`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`))),2) AS `Beneficio_Antiguedad`,`re`.`Horas_Extras` AS `Horas_Extras`,(`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`) AS `Pago_Horas_Extras`,`re`.`Mes_vigente` AS `mes` from ((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `descuentos_que_pagan`
--

/*!50001 DROP VIEW IF EXISTS `descuentos_que_pagan`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `descuentos_que_pagan` AS select `e`.`Cod_Emp` AS `Nro_Empleado`,`e`.`Nombre_Emp` AS `Empleado`,`des`.`Nombre_Des` AS `Descuento`,`des`.`Porcentaje_Des` AS `Porcentaje`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `DESCUENTOST`()),2) AS `Descuentos_a_Pagar_Total`,`re`.`Mes_vigente` AS `mes` from ((((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) join `sueldo_paga_descuento` `spd` on((`s`.`Cod_Sueldo` = `spd`.`Cod_Sueldo`))) join `descuento` `des` on((`spd`.`Cod_Descuentos` = `des`.`Cod_Descuento`))) order by `e`.`Cod_Emp` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `facturas`
--

/*!50001 DROP VIEW IF EXISTS `facturas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `facturas` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `nombre`,`f`.`Cod_Factura` AS `Codigo_Factura`,`f`.`Empresa_Factura` AS `empresa_factura`,`f`.`Cantidad_Factura` AS `Cantidad`,`fp`.`Mes_Descargo` AS `Mes_Descargo` from ((`empleados` `e` join `facturas_presentadas` `fp` on((`e`.`Cod_Emp` = `fp`.`Cod_Empleados`))) join `factura` `f` on((`f`.`Cod_Factura` = `fp`.`Cod_Factura`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `impuestos_que_pagan`
--

/*!50001 DROP VIEW IF EXISTS `impuestos_que_pagan`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `impuestos_que_pagan` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `Empleado`,`i`.`Nombre_Imp` AS `Nombre_impuesto`,`i`.`Porcentaje_Imp` AS `Porcentaje_Impuesto`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `DESCUENTOST`()),2) AS `Impuestos_a_Pagar`,`re`.`Mes_vigente` AS `mes` from ((((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) join `sueldo_paga_impuesto` `spi` on((`s`.`Cod_Sueldo` = `spi`.`Cod_Sueldo`))) join `impuesto` `i` on((`spi`.`Cod_Imp` = `i`.`Cod_Imp`))) order by `e`.`Cod_Emp` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `total_sueldo_dias`
--

/*!50001 DROP VIEW IF EXISTS `total_sueldo_dias`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `total_sueldo_dias` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `Empleado`,((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) AS `Sueldo_Total`,(`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`) AS `Pago_Horas_Extras`,`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) AS `Beneficio_Antiguedad`,`re`.`Mes_vigente` AS `mes` from ((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `total_sueldo_dias_informe`
--

/*!50001 DROP VIEW IF EXISTS `total_sueldo_dias_informe`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `total_sueldo_dias_informe` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `nombre`,`re`.`Dias_P` AS `Dias_Puntual`,(`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) AS `Pago_Dias_Puntual`,`re`.`Dias_A` AS `Dias_Atrasado`,((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`) AS `Pago_Dias_Atraso`,`re`.`Dias_F` AS `Dias_No_Cobrados`,0 AS `Pago_Dias_Faltados`,`re`.`Mes_vigente` AS `mes` from ((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `total_sueldo_informe`
--

/*!50001 DROP VIEW IF EXISTS `total_sueldo_informe`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `total_sueldo_informe` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `Empleado`,((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) AS `Sueldo_Total`,(`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`) AS `Pago_Horas_Extras`,round((`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`))),2) AS `Beneficio_Antiguedad`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `DESCUENTOST`()),2) AS `Descuentos`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `IMPUESTOST`()),2) AS `Impuestos`,ifnull(`IMPUESTOS_PAGADOS_FACTURA`(`e`.`Cod_Emp`,`re`.`Mes_vigente`),0) AS `Impuestos_pagados_con_facturas`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) - ((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `DESCUENTOST`()) + (((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `IMPUESTOST`()))),2) AS `Total_a_pagar`,round((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) - (((((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `DESCUENTOST`()) + (((((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)) + (`ANTIGUEDADB`(`re`.`Anhos_Antiguedad`) * (((`s`.`Cant_Sueldo_Dia` * `re`.`Dias_P`) + ((`s`.`Cant_Sueldo_Dia` * 0.5) * `re`.`Dias_A`)) + (`re`.`Horas_Extras` * `s`.`Cant_Sueldo_Horas_Extras`)))) * `IMPUESTOST`())) - ifnull(`IMPUESTOS_PAGADOS_FACTURA`(`e`.`Cod_Emp`,`re`.`Mes_vigente`),0))),2) AS `Total_a_pagar_Con_facturas`,`re`.`Mes_vigente` AS `mes` from ((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `viewfacturas`
--

/*!50001 DROP VIEW IF EXISTS `viewfacturas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `viewfacturas` AS select `e`.`Cod_Emp` AS `nro_Empleado`,`e`.`Nombre_Emp` AS `nombre`,`f`.`Cod_Factura` AS `Codigo_Factura`,`f`.`Empresa_Factura` AS `empresa_factura`,`f`.`Cantidad_Factura` AS `Cantidad`,`fp`.`Mes_Descargo` AS `Mes_Descargo` from ((`empleados` `e` join `facturas_presentadas` `fp` on((`e`.`Cod_Emp` = `fp`.`Cod_Empleados`))) join `factura` `f` on((`f`.`Cod_Factura` = `fp`.`Cod_Factura`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `viewinv`
--

/*!50001 DROP VIEW IF EXISTS `viewinv`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `viewinv` AS select round(sum(`total_sueldo_informe`.`Total_a_pagar_Con_facturas`),2) AS `Pagos_este_mes`,`total_sueldo_informe`.`mes` AS `Mes` from `total_sueldo_informe` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vista_bd_completa`
--

/*!50001 DROP VIEW IF EXISTS `vista_bd_completa`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_bd_completa` AS select `e`.`Cod_Emp` AS `Cod_Emp`,`e`.`Nombre_Emp` AS `Nombre_Emp`,`e`.`Celular` AS `Celular`,`e`.`Direccion` AS `Direccion`,`re`.`Horas_Extras` AS `Horas_Extras`,`re`.`Dias_Totales` AS `Dias_Totales`,`re`.`Anhos_Antiguedad` AS `Años_Antiguedad`,`re`.`Mes_vigente` AS `Mes_vigente`,`r`.`Nombre_Rol` AS `Nombre_Rol`,`d`.`Nombre_Dep` AS `Nombre_Dep`,`s`.`Cant_Sueldo_Dia` AS `Cant_Sueldo_Dia`,`s`.`Cant_Sueldo_Horas_Extras` AS `Cant_Sueldo_Horas_Extras`,`des`.`Nombre_Des` AS `Nombre_Des`,`des`.`Porcentaje_Des` AS `Porcentaje_Des`,`i`.`Nombre_Imp` AS `Nombre_imp`,`i`.`Porcentaje_Imp` AS `Porcentaje_Imp` from ((((((((`empleados` `e` join `registros_emp` `re` on((`e`.`Cod_Emp` = `re`.`Cod_Emp`))) join `rol` `r` on((`e`.`Cod_Rol` = `r`.`Cod_Rol`))) join `departamento` `d` on((`e`.`Cod_Dep` = `d`.`Cod_Dep`))) join `sueldo` `s` on((`e`.`Cod_Sueldo` = `s`.`Cod_Sueldo`))) join `sueldo_paga_descuento` `spd` on((`s`.`Cod_Sueldo` = `spd`.`Cod_Sueldo`))) join `descuento` `des` on((`spd`.`Cod_Descuentos` = `des`.`Cod_Descuento`))) join `sueldo_paga_impuesto` `spi` on((`s`.`Cod_Sueldo` = `spi`.`Cod_Sueldo`))) join `impuesto` `i` on((`spi`.`Cod_Imp` = `i`.`Cod_Imp`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-18  0:04:57
