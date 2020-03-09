-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: comeve
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (1,'1503250034279_user',1,'2020-03-07 05:15:40'),(2,'1503250034280_token',1,'2020-03-07 05:15:41'),(4,'1580148993660_place_schema',1,'2020-03-07 05:15:41'),(7,'1581689075882_sector_schema',1,'2020-03-07 05:15:41'),(8,'1583558247579_follow_schema',2,'2020-03-07 05:18:18'),(11,'21583559288125_moment_schema',3,'2020-03-07 17:03:06'),(12,'1580348299246_resource_schema',4,'2020-03-07 17:11:44'),(15,'1583604513960_events_follows_schema',5,'2020-03-07 19:21:38'),(17,'1580946998677_event_resource_schema',6,'2020-03-08 18:10:37'),(18,'1579612589680_event_schema',7,'2020-03-08 18:15:22'),(21,'1583608206461_events_users_schema',8,'2020-03-08 21:02:32');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `parents` tinyint(1) NOT NULL,
  `amount_people` int(11) NOT NULL,
  `date` varchar(150) NOT NULL,
  `start` time NOT NULL,
  `end` time NOT NULL,
  `place_name` varchar(150) NOT NULL,
  `place_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,1,'Dia sem sapato',0,100,'2020-04-15','09:00:00','12:00:00','Quadra coberta',1,'2020-03-08 16:35:23','2020-03-08 18:11:02'),(2,1,'Dia sem sapato',0,100,'2020-04-15','09:00:00','12:00:00','Quadra coberta',1,'2020-03-08 17:02:42','2020-03-08 17:02:42'),(3,1,'Dia sem sapato',0,100,'2020-04-15','09:00:00','12:00:00','Quadra coberta',1,'2020-03-08 17:03:02','2020-03-08 17:03:02');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_resources`
--

DROP TABLE IF EXISTS `events_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_resources` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `resource_id` int(11) NOT NULL,
  `accept` int(11) NOT NULL,
  `date` varchar(10) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_resources`
--

LOCK TABLES `events_resources` WRITE;
/*!40000 ALTER TABLE `events_resources` DISABLE KEYS */;
INSERT INTO `events_resources` VALUES (6,2,1,1,'2020-04-15','2020-03-08 17:02:42','2020-03-08 17:02:42'),(7,2,2,1,'2020-04-15','2020-03-08 17:02:42','2020-03-08 17:02:42'),(8,3,1,1,'2020-04-15','2020-03-08 17:03:02','2020-03-08 17:03:02'),(9,3,2,1,'2020-04-15','2020-03-08 17:03:02','2020-03-08 17:03:02'),(10,3,3,1,'2020-04-15','2020-03-08 17:03:02','2020-03-08 17:03:02'),(45,1,1,1,'2020-04-15','2020-03-08 18:11:02','2020-03-08 18:11:02'),(46,1,2,1,'2020-04-25','2020-03-08 18:11:02','2020-03-08 18:11:02');
/*!40000 ALTER TABLE `events_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_users`
--

DROP TABLE IF EXISTS `events_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_users`
--

LOCK TABLES `events_users` WRITE;
/*!40000 ALTER TABLE `events_users` DISABLE KEYS */;
INSERT INTO `events_users` VALUES (15,1,1,'2020-03-08 18:11:02','2020-03-08 18:11:02'),(16,1,2,'2020-03-08 18:11:02','2020-03-08 18:11:02'),(17,1,3,'2020-03-08 18:11:02','2020-03-08 18:11:02');
/*!40000 ALTER TABLE `events_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follows` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES (1,'EI','2020-03-07 15:03:17','2020-03-07 19:47:15'),(2,'EF I','2020-03-07 15:03:18','2020-03-07 19:47:29'),(3,'EF II','2020-03-07 19:48:11','2020-03-07 19:48:11'),(4,'EM','2020-03-07 19:48:19','2020-03-07 19:48:19');
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moments`
--

DROP TABLE IF EXISTS `moments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `moments_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moments`
--

LOCK TABLES `moments` WRITE;
/*!40000 ALTER TABLE `moments` DISABLE KEYS */;
INSERT INTO `moments` VALUES (1,'Divulgação','2020-03-07 14:03:39','2020-03-07 20:08:32'),(2,'Pré-Produção','2020-03-07 14:05:34','2020-03-07 14:05:34'),(3,'Ensaios','2020-03-07 14:06:00','2020-03-07 14:25:03'),(4,'Montagem','2020-03-07 14:06:19','2020-03-07 14:06:19'),(5,'Apresentação','2020-03-07 14:06:32','2020-03-07 14:06:32');
/*!40000 ALTER TABLE `moments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `places` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `places_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (1,'Quadra coberta','2020-03-07 20:58:15','2020-03-07 20:58:15'),(2,'Mandela','2020-03-07 20:58:22','2020-03-07 20:58:22'),(3,'Aquário','2020-03-07 20:58:30','2020-03-07 20:58:30'),(4,'Auditório teste','2020-03-08 15:31:47','2020-03-08 15:32:08');
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resources` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `sector_name` varchar(150) NOT NULL,
  `sector_id` int(11) NOT NULL,
  `moment_name` varchar(150) NOT NULL,
  `moment_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resources_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (1,'Kit Multimídia','Detec',1,'Pré-Produção',2,'2020-03-07 14:36:23','2020-03-07 20:30:04'),(2,'Virtuais','Comunicação',5,'Divulgação',1,'2020-03-07 19:55:08','2020-03-07 20:36:36'),(3,'Cartaz','Comunicação',5,'Divulgação',1,'2020-03-07 19:55:43','2020-03-07 20:36:36'),(4,'Folder','Comunicação',5,'Divulgação',1,'2020-03-07 19:57:04','2020-03-07 20:36:36'),(5,'Vídeo','Comunicação',5,'Divulgação',1,'2020-03-07 20:01:58','2020-03-07 20:36:36'),(6,'Banner','Comunicação',5,'Divulgação',1,'2020-03-07 20:08:03','2020-03-07 20:36:36'),(7,'Briefing','Comunicação',5,'Divulgação',1,'2020-03-07 20:09:53','2020-03-07 20:36:36'),(8,'Comunicação Interna','Comunicação',5,'Divulgação',1,'2020-03-07 20:11:43','2020-03-07 20:36:36'),(9,'Convite','Comunicação',5,'Divulgação',1,'2020-03-07 20:12:18','2020-03-07 20:36:36'),(10,'Divulgação pós Evento','Comunicação',5,'Divulgação',1,'2020-03-07 20:14:00','2020-03-07 20:36:36'),(11,'Identidade Visual','Comunicação',5,'Divulgação',1,'2020-03-07 20:14:55','2020-03-07 20:36:36'),(12,'Ingresso Eletrônico','Detec',1,'Divulgação',1,'2020-03-07 20:16:06','2020-03-07 20:20:47'),(13,'Ingresso Papel','Comunicação',5,'Divulgação',1,'2020-03-07 20:16:54','2020-03-07 20:36:36'),(14,'Troca de Ingresso - Regras','Comunicação',5,'Divulgação',1,'2020-03-07 20:17:44','2020-03-07 20:36:36'),(15,'Arquivos de música e vídeo','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:23:46','2020-03-07 20:23:46'),(16,'Cadeiras ','Manutenção e SG',3,'Pré-Produção',2,'2020-03-07 20:25:02','2020-03-07 20:25:02'),(17,'Cantina','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:25:32','2020-03-07 20:25:32'),(18,'Cenário (confecção/compra)','DEAC',6,'Pré-Produção',2,'2020-03-07 20:26:08','2020-03-07 20:26:08'),(19,'Computadores e Tablets','Detec',1,'Pré-Produção',2,'2020-03-07 20:27:11','2020-03-07 20:27:11'),(20,'Equipamento de som ','Detec',1,'Pré-Produção',2,'2020-03-07 20:27:50','2020-03-07 20:27:50'),(21,'Equipamento som (alugar 3500)','Detec',1,'Pré-Produção',2,'2020-03-07 20:28:29','2020-03-07 20:28:29'),(22,'Lanche','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:29:48','2020-03-07 20:29:48'),(23,'Luz (Contratar)','Detec',1,'Pré-Produção',2,'2020-03-07 20:30:37','2020-03-07 20:30:37'),(24,'Materias Necessários','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:31:23','2020-03-07 20:31:23'),(25,'Necessidade de acompanhemento técnico','Detec',1,'Pré-Produção',2,'2020-03-07 20:33:40','2020-03-07 20:33:40'),(26,'Ônibus (contratar)','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:34:20','2020-03-07 20:34:20'),(27,'Palco (especificar)','Manutenção e SG',3,'Pré-Produção',2,'2020-03-07 20:35:39','2020-03-07 20:35:39'),(28,'Recepção e Segurança do Evento','Pró-aluno',8,'Pré-Produção',2,'2020-03-07 20:37:37','2020-03-07 20:37:37'),(29,'Roteiro do Evento','Solicitante',4,'Pré-Produção',2,'2020-03-07 20:38:14','2020-03-07 20:38:14'),(30,'Saída (organizar e avisar)','Pró-aluno',8,'Pré-Produção',2,'2020-03-07 20:39:43','2020-03-07 20:39:43'),(31,'TV e Cronômetro','Detec',1,'Pré-Produção',2,'2020-03-07 20:40:30','2020-03-07 20:40:30'),(32,'Materias Necessários (ensaio)','Solicitante',4,'Ensaios',3,'2020-03-07 20:42:27','2020-03-07 20:42:27'),(33,'Agendar Espaço','Solicitante',4,'Ensaios',3,'2020-03-07 20:43:29','2020-03-07 20:43:29'),(34,'Montagem de palco (croqui)','Manutenção e SG',3,'Montagem',4,'2020-03-07 20:44:42','2020-03-07 20:49:08'),(35,'Montagem de Luz (croqui)','Manutenção e SG',3,'Montagem',4,'2020-03-07 20:48:19','2020-03-07 20:48:19'),(36,'Cadeiras (croqui)','Manutenção e SG',3,'Montagem',4,'2020-03-07 20:50:51','2020-03-07 20:50:51'),(37,'Montagem de Cenário (croqui)','DEAC',6,'Montagem',4,'2020-03-07 20:52:16','2020-03-07 20:52:16'),(38,'Recepção dos Pais e Alunos','Pró-aluno',8,'Apresentação',5,'2020-03-07 20:52:50','2020-03-07 20:52:50'),(39,'Recepção dos Artistas','Pró-aluno',8,'Apresentação',5,'2020-03-07 20:53:10','2020-03-07 20:53:10'),(40,'Direcionamento do Público','Pró-aluno',8,'Apresentação',5,'2020-03-07 20:53:40','2020-03-07 20:53:40'),(41,'Enfermaria','Pró-aluno',8,'Apresentação',5,'2020-03-07 20:54:01','2020-03-07 20:54:01'),(42,'Equipe de Apoio','Pró-aluno',8,'Apresentação',5,'2020-03-07 20:54:35','2020-03-07 20:54:35'),(43,'Equipe de Limpeza','Manutenção e SG',3,'Apresentação',5,'2020-03-07 20:54:57','2020-03-07 20:54:57'),(44,'Fotos (contratação)','Comunicação',5,'Apresentação',5,'2020-03-07 20:55:20','2020-03-07 20:55:20'),(45,'Mestre de Cerimônia','Solicitante',4,'Apresentação',5,'2020-03-07 20:56:32','2020-03-07 20:56:32'),(46,'Vídeo (contratação)','Comunicação',5,'Apresentação',5,'2020-03-07 20:57:07','2020-03-07 20:57:07');
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectors`
--

DROP TABLE IF EXISTS `sectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sectors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sectors_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectors`
--

LOCK TABLES `sectors` WRITE;
/*!40000 ALTER TABLE `sectors` DISABLE KEYS */;
INSERT INTO `sectors` VALUES (1,'Detec','2020-03-07 02:25:05','2020-03-07 20:20:47'),(2,'Gerente','2020-03-07 02:25:14','2020-03-07 20:20:56'),(3,'Manutenção e SG','2020-03-07 02:25:25','2020-03-07 20:21:22'),(4,'Solicitante','2020-03-07 19:12:57','2020-03-07 19:12:57'),(5,'Comunicação','2020-03-07 19:54:26','2020-03-07 20:36:36'),(6,'DEAC','2020-03-07 20:20:04','2020-03-07 20:20:36'),(7,'Depas','2020-03-07 20:20:18','2020-03-07 20:20:18'),(8,'Pró-aluno','2020-03-07 20:36:51','2020-03-07 20:36:51');
/*!40000 ALTER TABLE `sectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `password` varchar(60) NOT NULL,
  `sector_name` varchar(100) NOT NULL,
  `sector_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gerente@gmail.com','Gerente Name','$2a$10$j9LlZPvRLsNJdnem5PrL/eMExMFa0nRjVl/I4rWErpihKBTvHk1Hq','Gerente',2,'2020-03-07 02:26:27','2020-03-08 18:25:57'),(2,'manutencao@gmail.com','manutencao','$2a$10$tkrj8hs67Wtn3BQCD8I1Ku13qoXfk1IIKqJT2xlblV2a5DF.5KgxS','Manutenção e SG',3,'2020-03-07 02:27:01','2020-03-07 20:21:22'),(3,'detec@gmail.com','detec','$2a$10$dv0jVzXx8FrssDXHkH02TeaN8TY5Z43mYR.xWcjLxHCJGWGo.C6k6','Detec',1,'2020-03-08 18:10:51','2020-03-08 18:10:51');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-09 11:43:58
