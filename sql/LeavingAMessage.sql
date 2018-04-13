/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-13 14:10:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `leavingamessage`
-- ----------------------------
DROP TABLE IF EXISTS `leavingamessage`;
CREATE TABLE `leavingamessage` (
  `Id` int(200) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(50) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `headPhotoUrl` varchar(100) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of leavingamessage
-- ----------------------------
