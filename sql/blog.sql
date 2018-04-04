/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : yunblog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-04 21:51:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `blog`
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL AUTO_INCREMENT,
  `blogTitle` varchar(255) NOT NULL,
  `blogAnnotation` varchar(300) NOT NULL,
  `blogDate` date NOT NULL,
  `blogContent` varchar(5000) NOT NULL,
  PRIMARY KEY (`blogId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('16', '第一篇博客', '第一篇博客', '2018-03-31', '\n\n> 这是第一篇博客    —— <a href=\"http://liyunhao.cn\" target=\"_blank\"> [李云皓]');
INSERT INTO `blog` VALUES ('17', '开学', '开学第一天', '2018-03-31', '**开学第一天一切如故！**');
INSERT INTO `blog` VALUES ('18', '在腾讯云上搭建个人静态博客', '一个不是很勉强的教程', '2018-03-31', '**2017年12月8日**\n\n这周开始学习在腾讯云上部署自己的博客。\n\n过程很有趣，特别是用域名访问自己部署的网页还是很有成就感的，所以决定写一遍文章来分享学习过程，\n希望路过的朋友可以多提一些建议，交流心得。\n\n一、我们需要知道的预备知识是：\n①前端开发的基础知识：html，css，JavaScript.\n这三个东西最为基础，但是却是前端开发的“三剑客”，很多的前端框架正是基于他们三个开发出来的。\n这里推荐前端学习的网站：W3C,菜鸟教程，对于前端初学者开说比较友好，它们提供了很多可以测试的实例，在网页编写的过程中可以随时看到运行效果。\n②服务器请求的相关知识：\n服务器端的编程语言有很多。\n可以使用java或者nodejs来搭建后台。\n\n以tomcat服务器为例，将自己写好的页面用tomcat发布到本地，可以通过hocalhost：8080端口访问。\n这一步很关键。关于tomcat服务器的安装及环境配置建议去慕课网学习。其中tomcat的运行需要java的环境。\n以下提供两个参考的学习案例：\n\njava环境配置\nhttp://www.imooc.com/video/1459\n有全部的安装教程及环境变量配置方法\n(jdk安装路径)JAVA_HOME :就是java文件夹下的jdk文件的位置 有时jdk文件夹后面可能有其它数字，因版本不同\n(jdk命令文件的位置)Path：jdk下的bin文件夹，（win10以下的版本要编辑已有的path，在最前面加上路径，之后用“；”隔开与其它路径）\n(jdk库文件的位置)CLASSPATH：jdk下的lib目录 注意在路径前加上.;\n\ntomcat配置\nhttp://blog.csdn.net/zhouzezhou/article/details/52450810\n在系统变量里新建变量名：CATALINA_BASE，变量值：D:\\tomcat\\apache-tomcat-9.0.0.M9\n在系统变量里新建变量名：CATALINA_HOME，变量值：D:\\tomcat\\apache-tomcat-9.0.0.M9\n在系统变量里打开PATH，添加变量值：%CATALINA_HOME%\\lib;%CATALINA_HOME%\\bin\n\n\n----------\nnodejs：\n在另一篇文章“nodejs搭建个人博客系统”里面有详细介绍，这里不再赘述。\n\n二、我们就可以将网页发布到腾讯云上了，一下步骤供参考：\n①购买域名\n![登录腾讯云首页注册账号](http://img.blog.csdn.net/20171208150222121?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)\n②购买服务器\n![这里是服务器的基本配置，可以选择操作系统，带宽等](http://img.blog.csdn.net/20171208150845561?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)\n![这里写图片描述](http://img.blog.csdn.net/20171208151017167?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)\n对于个人博客系统其实不需要太高的配置，考虑到价格因素。\n另外腾讯云有学生主机，只要认证后就有很大的优惠。\n③域名解析\n\n这里需要说明的一点就是域名是需要备案的，提交之后方可使用，不然就是Internet的“黑户”了，\n过程略微有点烦，不过相信大家都是遵纪守法的好公民，可以很好完成这个任务，这里就不写过程了，按照上面的步骤来就行了。\n![这里你的服务器与云主机关联起来](http://img.blog.csdn.net/20171208151510898?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)\n\n将域名绑定到自己主机公网IP上，\n绑定之后，大概十分钟，在你本地电脑的命令行执行\nping 你的域名  回车，\n如果正常收到你的主机ip发来的数据，说明你的域名解析成功了。\n\n三、配置云主机\n        这里以windows为例。\n        ①登录腾讯云官方网站，进入控制台，找到自己的主机，点击右侧的![这里写图片描述](http://img.blog.csdn.net/20180221093538945?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)更多，之后选择windows操作系统，然后启动服务器。\n        ②在本地的电脑，win+R，输入mstsc回车，打开远程连接命令窗口，输入你的主机IP，以及密码进行连接，顺利的话之后就可以看到你的云服务器了，这个服务器由于是Windows的操作系统，所以看起来和自己本地的电脑没啥区别，这样就方便进行环境变量的配置了。\n        ③之后就可以将自己写好的静态博客发布到tomcat上面了。\n四、访问网页\n        在本地电脑打开浏览器，输入：“你的域名：端口号”，这个端口号tomcat默认是8080，你也可以修改他的端口号，具体方法自行百度，如果修改为80端口时，访问网页的时候就不需要加端口号，只要域名就可以访问网页。\n       以上是自己的学习过程的记录，欢迎点赞批评指正！');
INSERT INTO `blog` VALUES ('19', 'Part3000IsAlreadyInUse', 'node常见错误', '2018-03-31', '我们在使用webstorm的时候会经常遇到这样的情况，出现这种情况的原因：\n**①当我们同时在一个端口运行一个项目，再同时在这个端口运行其他项目时**\n**②同一个项目未停止直接关闭webstorm窗口，再次打开项目运行时**\n\n这时有一个万能的办法，那就是**重启电脑**，哈哈！**~~**\n\n开玩笑了，当然，这个端口上的进程是可以停掉的。\n打开cmd\n键入\n\n```\nnetstat -o -n -a | findstr :3000\n```\n\n3000为端口号，可以改为其他的。\n\n之后可以看到3000端口的进程：![这里写图片描述](http://img.blog.csdn.net/20180221151309633?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)\n\n之后键入\n\n```\ntaskkill /F /PID 1776\n```\n则可以停掉对应序号的进程。之后再运行工程就不会有这种情况了。\n');
INSERT INTO `blog` VALUES ('20', 'chat', 'BLChat', '2018-03-31', '# BLChat\n## 简介  \nBLChat即时通讯APP\n\n## SDK版本\nAndroid 4.0.3\n\n## 测试环境\n小米2S、vivo x5pro\n\n## 开发环境\nAndroid Studio 2.3.3\n\n## 文件夹说明\nIMServer 文件夹存放的是服务器接口文件，需要在model文件夹下配置你的数据库账号密码\n\n## 功能模块划分\n1. 用户管理模块\n2. 好友管理模块\n3. 即时通讯模块\n4. 朋友圈模块\n\n## 界面\n### 开始界面\n![启动页面](http://i.imgur.com/jqQ2ZEw.png)\n### 主页面\n![主页面](http://i.imgur.com/8obW0Lv.png)\n![主页面2](http://i.imgur.com/GNOi64s.png)\n## 数据库设计\n### 用户信息列表\n字段名|说明|数据类型|约束\n:----:|:-----:|:-----:|:---:\n_id|索引	|整形|主码\nuser_id|用户ID|整型|非空\nuser_name|用户名|字符串，长度为30|非空\nuser_sex|性别|字符串，长度为４|非空\nuser_sign|用户个性签名|字符串，长度为180| \nuser_account|用户帐号|字符串，长度为30|非空\nuser_location|用户地区|字符串，长度为36|	\n\n### 好友信息表\n字段名|说明|数据类型|约束\n:----:|:-----:|:-----:|:---:\n_id	|索引	|整形	|主码\nfriend_id|好友ID	|整形|非空\ngroup_name|分组名称|字符串，长度为30|非空\nfriend_name|好友名称|字符串，长度为30|非空\nnick_name|昵称|字符串，长度为30|	 \nfriend_sex|好友性别|字符串，长度为4|非空\nfriend_account|好友帐号|字符串，长度为30|非空\nfriend_location|好友地区|字符串，长度为30|	 \nfriend_recent_photo|好友朋友圈展示图片	|字符串，长度为300|\n	\n### 聊天记录表\n字段名|说明|数据类型|约束\n:----:|:-----:|:-----:|:---:\n_id|索引|整形|主码\nuser_id|用户ID|整型|外键\nfriend_id|好友ID|整型|外键\nchat_msg_content|聊天内容|文本|非空\nchat_msg_time|聊天时间|日期|非空\nchat_msg_type|聊天类型，接受还是发送|字符串，长度为10|非空\nshow_time_flag|是否显示时间|整型|非空\n\n \n### 添加好友表\n字段名|说明|数据类型|约束\n:----:|:-----:|:-----:|:---:\n_id|索引|整形|主码\naccount|请求者账号|字符串，长度为30|非空\nreason|添加好友的请求信息|字符串，长度为30|默认为“您好”\nstatus|添加好友的状态|字符串，长度为10|非空\n\n### 服务器用户信息列表\n字段名|说明|数据类型|约束\n:----:|:-----:|:-----:|:---:\nid|索引|整形|主码\nusername|用户名|字符串，长度为30|非空\npassword|密码|字符串，长度为32|非空\nnickname|昵称|字符串，长度为18|非空\nsign|用户个性签名	|字符串，长度为180|无	 \nhead|用户头像|字符串，长度为180|无\nlocation	|用户地区|字符串，长度为36|无 	\naddtime|注册时间|DATETIME|非空 \nstatus|用户状态|Int|默认0	 \n\n');
INSERT INTO `blog` VALUES ('21', '大连理工大学软件学院数据结构第四章第九题', '数据结构上机', '2018-04-01', '测试');
INSERT INTO `blog` VALUES ('22', '大连理工大学软件学院数据结构第四章第九题', '数据结构上机', '2018-04-01', '测试');
