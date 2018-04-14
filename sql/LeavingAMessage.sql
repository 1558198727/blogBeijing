/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-14 13:36:31
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of leavingamessage
-- ----------------------------
INSERT INTO `leavingamessage` VALUES ('12', 'liyunhao', '第一条', 'http://liyunhao.cn/LeavingAMessage/img/face3.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('13', '高江', '第二条', 'http://liyunhao.cn/LeavingAmessage/img/face7.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('14', 'hello', 'hello', 'http://liyunhao.cn/LeavingAMessage/img/face6.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('15', 'fsdfsa', 'fasdf', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('16', 'lyh', '云皓大佬6666', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('17', '一个神秘男子', '新的软院表白墙诞生了！！', 'http://liyunhao.cn/LeavingAMessage/img/face3.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('18', '123', '效果很不错啊', 'http://liyunhao.cn/LeavingAMessage/img/face6.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('19', '吐槽', '这几个头像没一个不丑的', 'http://liyunhao.cn/LeavingAMessage/img/face4.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('20', '高江', '不要黑我，不然我删了', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('21', '头像', '代码是网上找的', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('22', '的发生', '发生的', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('23', '的发生', '发生的', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('24', 'mry', 'sss-cippus开机密码是什么(=_=)', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('25', 'mry', '先说你是谁', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('26', '神秘男子', '听说云皓学长特别帅', 'http://liyunhao.cn/LeavingAMessage/img/face3.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('27', '神秘男子', '不用听说 是真的', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('28', '哈哈哈', '，', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('29', '哈哈哈哈', '张宠最帅', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('30', '哈哈', '宠神最帅', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('31', '爸爸', '李云皓什么时候能脱单？', 'http://liyunhao.cn/LeavingAMessage/img/face5.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('32', '哈哈哈', '脱单怕是不可能了', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('33', '整片星空', '我最帅没毛病', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('34', '李云皓', '我是梦创第一帅', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('35', '李云皓', '要做我女朋友的可以来排队了', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('36', 'lyh本人', '不要黑我', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('37', '舒阿里强无敌', '我今天就是要膜一波舒阿里，舒宇宙', 'http://liyunhao.cn/LeavingAMessage/img/face3.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('38', '小姐姐', '宠神最帅?', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('39', '舒淇阿里强无敌', '我今天也要膜一波舒阿里，舒宇宙', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('40', '小姐姐', '宠神最帅', 'http://liyunhao.cn/LeavingAmessage/img/face7.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('41', '这个头像还不错', '666', 'http://liyunhao.cn/LeavingAMessage/img/face7.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('42', '有人黑我', '有人黑我，我虽然很自恋，但是没有这么丧心病狂', 'http://liyunhao.cn/LeavingAMessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('43', '有人黑我', '说黑我的那个人不是本人', 'http://liyunhao.cn/LeavingAmessage/img/face1.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('44', '神秘男子', '我只说一句，能不能加一个御姐头像啊 像我这样的', 'http://liyunhao.cn/LeavingAMessage/img/face8.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('45', '学姐的头像', '这个谁说不好看', 'http://liyunhao.cn/LeavingAmessage/img/liuxutong.jpg', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('46', '我是谁', '我可能不是我这个头像表示的人……', 'http://liyunhao.cn/LeavingAMessage/img/liuxutong.jpg', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('47', '睡觉', '大家早点睡啊', 'http://liyunhao.cn/LeavingAmessage/img/face3.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('48', '偶哈有', '大家早上好！', 'http://liyunhao.cn/LeavingAMessage/img/face5.gif', '2018-04-13');
INSERT INTO `leavingamessage` VALUES ('49', 'hello', '早上好', 'http://liyunhao.cn/LeavingAmessage/img/face7.gif', '2018-04-14');
