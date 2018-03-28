var express = require('express');
var router = express.Router();

var Sequelize = require('sequelize');
var db = require("../model/mysql");
var user = require("..//model/user");
var blog = require("../model/blog");
var fsWrite = require("../model/fsWrite");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/qqLogin', function(req, res, next) {

    fsWrite.WriteBlogLog("qqLogin");
    res.render('qqLogin', { title: '首页 | 李云皓的博客' });
});

router.get('/login', function(req, res, next) {
    fsWrite.WriteBlogLog("/users/login");

    // var access_token = req.query.access_token;
    //
    // var expires_in = req.query.expires_in;
    // console.log("access_token" + access_token);
    // console.log("expires_in" + expires_in);
    res.render('users_login', { title: '首页 | 李云皓的博客'});
});

router.post('/login', function(req, res, next) {
    // nickname:"『莫理风尘』",
    //     gender:"男",
    //     province:"辽宁",
    //     city:"大连",
    //     figureurl:paras.figureurl,
    //     figureurl_1:paras.figureurl_1,
    //     figureurl_2:paras.figureurl_2,
    //     figureurl_qq_1:paras.figureurl_qq_1,
    //     figureurl_qq_2:paras.figureurl_qq_2,
    //     openId:paras.openId,
    //     accessToken:paras.accessToken
    var userInfo = req.body;
    console.log(JSON.stringify(userInfo));
    req.session.isLogin = true;
    req.session.nickname = userInfo.nickname;
    req.session.gender = userInfo.gender;
    req.session.province = userInfo.province;
    req.session.city = userInfo.city;
    req.session.figureurl = userInfo.figureurl;
    req.session.figureurl_qq_2 = userInfo.figureurl_qq_2;
    req.session.openId = userInfo.openId;
    req.session.accessToken = userInfo.accessToken;
    fsWrite.WriteUsersInfo(userInfo);
    console.log("session:" + JSON.stringify(req.session));
    res.send({data: 'ELuoSiDeFangKuai'});
});

router.get('/qqLogin', function(req, res, next) {

    // fsWrite.WriteBlogLog("qqLogin");
    res.render('qqLogin', { title: '首页 | 李云皓的博客' });
});
module.exports = router;
