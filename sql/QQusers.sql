/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-04 21:51:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `qqusers`
-- ----------------------------
DROP TABLE IF EXISTS `qqusers`;
CREATE TABLE `qqusers` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `openId` varchar(50) NOT NULL,
  `accessToken` varchar(50) NOT NULL,
  `nickname` varchar(30) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `province` varchar(40) NOT NULL,
  `city` varchar(20) NOT NULL,
  `year` varchar(10) NOT NULL,
  `figureurl` varchar(100) NOT NULL,
  `figureurl_1` varchar(100) NOT NULL,
  `figureurl_2` varchar(100) NOT NULL,
  `figureurl_qq_1` varchar(100) NOT NULL,
  `figureurl_qq_2` varchar(100) NOT NULL,
  `is_yellow_vip` varchar(2) NOT NULL,
  `vip` varchar(2) NOT NULL,
  `yellow_vip_level` varchar(2) NOT NULL,
  `level` varchar(4) NOT NULL,
  `is_yellow_year_vip` varchar(4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of qqusers
-- ----------------------------
INSERT INTO `qqusers` VALUES ('4', 'AB118BA4C9026D00191C76099B23FA75', 'D445F008D077378AE708A1364F0C1280', '『莫理风尘』', '男', '辽宁', '大连', '1997', 'http://qzapp.qlogo.cn/qzapp/101470662/AB118BA4C9026D00191C76099B23FA75/30', 'http://qzapp.qlogo.cn/qzapp/101470662/AB118BA4C9026D00191C76099B23FA75/50', 'http://qzapp.qlogo.cn/qzapp/101470662/AB118BA4C9026D00191C76099B23FA75/100', 'http://thirdqq.qlogo.cn/qqapp/101470662/AB118BA4C9026D00191C76099B23FA75/40', 'http://thirdqq.qlogo.cn/qqapp/101470662/AB118BA4C9026D00191C76099B23FA75/100', '0', '0', '0', '0', '0');
