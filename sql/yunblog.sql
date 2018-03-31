/*
Navicat MySQL Data Transfer

Source Server         : li
Source Server Version : 50719
Source Host           : 127.0.0.1:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-03-31 21:23:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `blog`
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL AUTO_INCREMENT,
  `blogTitle` varchar(255) NOT NULL,
  `blogAnnotation` varchar(300) DEFAULT NULL,
  `blogDate` date NOT NULL,
  `blogContent` varchar(5000) NOT NULL,
  PRIMARY KEY (`blogId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('1', 'node', null, '2018-03-01', '1111');
INSERT INTO `blog` VALUES ('2', 'chat', null, '2018-03-01', 'asdfsdafsadf');
INSERT INTO `blog` VALUES ('3', 'Part3000IsAlreadyInUse', null, '2018-03-01', 'asdfsdafsadf');
INSERT INTO `blog` VALUES ('4', '大连理工大学软件学院数据结构第四章第九题', null, '2018-03-01', 'asdfsdafsadf');
INSERT INTO `blog` VALUES ('5', '图的邻接矩阵表示广度深度遍历大连理工大学数据结构上机', null, '2018-03-01', 'asdf ');
INSERT INTO `blog` VALUES ('6', '在腾讯云上搭建个人静态博客', null, '2018-03-01', 'asdfasdfsdfasdfsaf');
INSERT INTO `blog` VALUES ('10', '测试', null, '2018-03-31', '大幅度发');
INSERT INTO `blog` VALUES ('11', 'fasfsadf', null, '2018-03-31', 'dsfasfd');
INSERT INTO `blog` VALUES ('12', 'sdfsa', null, '2018-03-31', 'dasfas');
INSERT INTO `blog` VALUES ('13', 'fsadf', null, '2018-03-31', 'asdfs');
INSERT INTO `blog` VALUES ('14', 'fsadfasf', null, '2018-03-31', 'dsfasdf');
INSERT INTO `blog` VALUES ('15', '是打发', null, '2018-03-31', '我们在使用webstorm的时候会经常遇到这样的情况，出现这种情况的原因：\n**①当我们同时在一个端口运行一个项目，再同时在这个端口运行其他项目时**\n**②同一个项目未停止直接关闭webstorm窗口，再次打开项目运行时**\n\n这时有一个万能的办法，那就是**重启电脑**，哈哈！**~~**\n\n开玩笑了，当然，这个端口上的进程是可以停掉的。\n打开cmd\n键入\n\n```\nnetstat -o -n -a | findstr :3000\n```\n\n3000为端口号，可以改为其他的。\n\n之后可以看到3000端口的进程：![这里写图片描述](http://img.blog.csdn.net/20180221151309633?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)\n\n之后键入\n\n```\ntaskkill /F /PID 1776\n```\n则可以停掉对应序号的进程。之后再运行工程就不会有这种情况了。\n');

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
