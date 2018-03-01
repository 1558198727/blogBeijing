/*
Navicat MySQL Data Transfer

Source Server         : li
Source Server Version : 50719
Source Host           : 127.0.0.1:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-03-01 10:49:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `blog`
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL AUTO_INCREMENT,
  `blogTitle` varchar(255) NOT NULL,
  `blogDate` date NOT NULL,
  `blogContent` varchar(500) NOT NULL,
  PRIMARY KEY (`blogId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('1', '111', '2018-03-01', '1111');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createDate` date DEFAULT NULL,
  `userName` varchar(255) NOT NULL,
  `userAge` varchar(255) DEFAULT NULL,
  `slogan` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '12132132', '2312132', '2032-12-03', '32123', '32132', '321321');
INSERT INTO `user` VALUES ('2', '123', '123', '2112-12-13', '32132', '132', '32123');
