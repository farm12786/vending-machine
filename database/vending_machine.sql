/*
 Navicat Premium Data Transfer

 Source Server         : do-database
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : 157.230.37.137:3306
 Source Schema         : vending_machine

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 15/05/2022 15:15:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'A1', 'chang', 55, 15, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/chang.png');
INSERT INTO `products` VALUES (2, 'A2', 'leo', 62, 7, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/leo.jpg');
INSERT INTO `products` VALUES (3, 'A3', 'sing', 65, 0, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/sing.png');
INSERT INTO `products` VALUES (4, 'B1', 'heineken', 70, 19, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/heineken.jpg');
INSERT INTO `products` VALUES (5, 'B2', 'asahi', 75, 18, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/asahi.png');
INSERT INTO `products` VALUES (6, 'B3', 'tiger', 58, 20, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/tiger.png');
INSERT INTO `products` VALUES (7, 'C1', 'hoegaarden', 90, 0, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/hoegaarden.png');
INSERT INTO `products` VALUES (8, 'C2', 'budweiser', 80, 30, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/budweiser.jpg');
INSERT INTO `products` VALUES (9, 'C3', 'federbrau', 58, 0, 'https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/federbrau.jpg');

SET FOREIGN_KEY_CHECKS = 1;
