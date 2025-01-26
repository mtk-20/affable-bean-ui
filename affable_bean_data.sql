-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: dbaffablebean
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'dairy'),(2,'meats'),(3,'bakery'),(4,'fruit_veg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Yangon','mary@gmail.com','mary','1234567'),(2,'Larkspur Dr  Apt , DA 1234','mary@gmail.com','mary','055555555'),(3,'Larkspur Dr  Apt , DA 1234','mary@gmail.com','mary','055555555');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order_product`
--

DROP TABLE IF EXISTS `customer_order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_order_product` (
  `customer_order_id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `order_product_id` int DEFAULT NULL,
  PRIMARY KEY (`customer_order_id`),
  KEY `FKq2jpa9xar8psm8r19pidg2oye` (`customer_id`),
  KEY `FKfqr9nge7rx83h3lwmuv2m1evc` (`order_product_id`),
  CONSTRAINT `FKfqr9nge7rx83h3lwmuv2m1evc` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`id`),
  CONSTRAINT `FKq2jpa9xar8psm8r19pidg2oye` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order_product`
--

LOCK TABLES `customer_order_product` WRITE;
/*!40000 ALTER TABLE `customer_order_product` DISABLE KEYS */;
INSERT INTO `customer_order_product` VALUES (1,'1234567891',1,1),(2,'1234567891',1,2),(3,'401732027577185',2,3),(4,'401732027577185',2,4),(5,'401732027577185',2,5),(6,'879725741088003',3,6),(7,'879725741088003',3,7),(8,'879725741088003',3,8);
/*!40000 ALTER TABLE `customer_order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,'milk',1.7,5),(2,'butter',1.09,7),(3,'sunflower seed loaf',1.89,2),(4,'sesame seed bagel',1.19,9),(5,'chocolate cookies',2.39,7),(6,'butter',1.09,5),(7,'sunflower seed loaf',1.89,7),(8,'seedless watermelon',1.49,3);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `last_update` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`),
  CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'semi skimmed (1L)','2023-01-30 03:15:48.000000','milk',1.7,1),(2,'mild cheddar (330g)','2023-01-30 03:15:48.000000','cheese',2.39,1),(3,'unsalted (250g)','2023-01-30 03:15:48.000000','butter',1.09,1),(4,'medium-sized (6 eggs)','2023-01-30 03:15:48.000000','free range eggs',1.76,1),(5,'rolled in fresh herbs<br>2 patties (250g)','2023-01-30 03:15:48.000000','organic meat patties',2.29,2),(6,'matured, organic (70g)','2023-01-30 03:15:48.000000','parma ham',3.49,2),(7,'free range (250g)','2023-01-30 03:15:48.000000','chicken leg',2.59,2),(8,'reduced fat, pork<br>3 sausages (350g)','2023-01-30 03:15:49.000000','sausages',3.55,2),(9,'600g','2023-01-30 03:15:49.000000','sunflower seed loaf',1.89,3),(10,'4 bagels','2023-01-30 03:15:49.000000','sesame seed bagel',1.19,3),(11,'4 buns','2023-01-30 03:15:49.000000','pumpkin seed bun',1.15,3),(12,'contain peanuts<br>(3 cookies)','2023-01-30 03:15:49.000000','chocolate cookies',2.39,3),(13,'2 pieces','2023-01-30 03:15:49.000000','corn on the cob',1.59,4),(14,'150g','2023-01-30 03:15:49.000000','red currants',2.49,4),(15,'500g','2023-01-30 03:15:49.000000','broccoli',1.29,4),(16,'250g','2023-01-30 03:15:50.000000','seedless watermelon',1.49,4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-02 10:49:37
