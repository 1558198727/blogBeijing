/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-08-24 22:15:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `vercode`
-- ----------------------------
DROP TABLE IF EXISTS `vercode`;
CREATE TABLE `vercode` (
  `phoneNum` varchar(11) NOT NULL,
  `code` varchar(4) NOT NULL,
  PRIMARY KEY (`phoneNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of vercode
-- ----------------------------
INSERT INTO `vercode` VALUES ('13847716671', '3631');
INSERT INTO `vercode` VALUES ('13855554444', '0137');
INSERT INTO `vercode` VALUES ('15048723607', '1234');
INSERT INTO `vercode` VALUES ('15845454545', '5105');
INSERT INTO `vercode` VALUES ('18544444444', '1850');
INSERT INTO `vercode` VALUES ('18742593080', '1601');
INSERT INTO `vercode` VALUES ('18742595877', '7100');
INSERT INTO `vercode` VALUES ('18744444444', '4910');
INSERT INTO `vercode` VALUES ('18745871236', '5147');
INSERT INTO `vercode` VALUES ('24242424242', '9648');
INSERT INTO `vercode` VALUES ('54545454545', '1490');
INSERT INTO `vercode` VALUES ('adsf', '4784');
INSERT INTO `vercode` VALUES ('asdfa', '1813');
INSERT INTO `vercode` VALUES ('ddffsaf', '5649');
INSERT INTO `vercode` VALUES ('fadsf', '8219');
INSERT INTO `vercode` VALUES ('fasdf', '4182');
INSERT INTO `vercode` VALUES ('fdasf', '2478');
INSERT INTO `vercode` VALUES ('fsdaf', '0827');
