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

    var userInfo = req.body;
    console.log(JSON.stringify(userInfo));
    req.session.gender = userInfo.gender;
    req.session.province = userInfo.province;
    req.session.city = userInfo.city;
    req.session.figureurl = userInfo.figureurl;
    req.session.openId = userInfo.openId;
    req.session.accessToken = userInfo.accessToken;
    fsWrite.WriteUsersInfo(userInfo);
    // console.log("nickname" + nickname + "gender" + gender + "accessToken" + accessToken);
    res.send({data: 'ELuoSiDeFangKuai'});
});

router.get('/qqLogin', function(req, res, next) {

    // fsWrite.WriteBlogLog("qqLogin");
    res.render('qqLogin', { title: '首页 | 李云皓的博客' });
});
module.exports = router;
