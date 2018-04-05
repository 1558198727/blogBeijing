var express = require('express');
var router = express.Router();

var fsWrite = require("../model/fsWrite");
var QQUsersApi = require("../api/QQUsersApi");
var userApi = require("../api/usersApi");

// router.get('/qqLogin', function(req, res, next) {
//
//     fsWrite.WriteBlogLog("qqLogin");
//     res.render('qqLogin', { title: '首页 | 李云皓的博客' });
// });

router.get('/login', function(req, res, next) {

    userApi.getLogin(function () {
        res.render('users_login', { title: '首页 | 李云皓的博客'});
    })
});

router.post('/login', function(req, res, next) {
    // var userInfo = req.body;
    QQUsersApi.createSession(req);//创建用户session
    QQUsersApi.createUser(req,function () {//检测没有登陆过就插入
        res.send({data: 'success'});
    });

});


router.get('/qqLogin', function(req, res, next) {

    userApi.getQQLogin(function () {
        res.render('qqLogin', { title: '首页 | 李云皓的博客' });
    })

});
module.exports = router;
