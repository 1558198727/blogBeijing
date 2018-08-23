/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-08-23 11:56:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dreamartssignup`
-- ----------------------------
DROP TABLE IF EXISTS `dreamartssignup`;
CREATE TABLE `dreamartssignup` (
  `stuId` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `qqNum` varchar(20) NOT NULL,
  `phoneNum` varchar(20) NOT NULL,
  `intro` text,
  PRIMARY KEY (`stuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of dreamartssignup
-- ----------------------------
