var QQusers = require("../db/QQusersDB");
var fsWrite = require("../model/fsWrite");

exports.createUser = function(req,callback){
    var userInfo = req.body;
    QQusers.findAll(
        {
            where: {
                openId: userInfo.openId
            }
        }
    ).then(function(result){
        if(result.length === 0){
            QQusers.create({
                openId:userInfo.openId,
                accessToken:userInfo.accessToken,
                nickname:userInfo.nickname,
                gender:userInfo.gender,
                province:userInfo.province,
                city:userInfo.city,
                year:userInfo.year,
                figureurl:userInfo.figureurl,
                figureurl_1:userInfo.figureurl_1,
                figureurl_2:userInfo.figureurl_2,
                figureurl_qq_1:userInfo.figureurl_qq_1,
                figureurl_qq_2:userInfo.figureurl_qq_2,
                is_yellow_vip:userInfo.is_yellow_vip,
                vip:userInfo.vip,
                yellow_vip_level:userInfo.yellow_vip_level,
                level:userInfo.level,
                is_yellow_year_vip:userInfo.is_yellow_year_vip
            });
            console.log("用户数据插入数据库成功");
        }
        else {
            console.log("该用户已经存在 插入失败");
        }
        fsWrite.WriteUsersInfo(userInfo);
        console.log("session:" + JSON.stringify(req.session));
        callback();
    });

};
exports.createSession = function (req) {
    var userInfo = req.body;
    req.session.isLogin = true;
    req.session.nickname = userInfo.nickname;
    req.session.gender = userInfo.gender;
    req.session.province = userInfo.province;
    req.session.city = userInfo.city;
    req.session.figureurl = userInfo.figureurl;
    req.session.figureurl_qq_2 = userInfo.figureurl_qq_2;
    req.session.openId = userInfo.openId;
    req.session.accessToken = userInfo.accessToken;
    console.log("创建session成功！");
    console.log("session" + JSON.stringify(req.session));

};
