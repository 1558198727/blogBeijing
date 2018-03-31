var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var db = require("../model/mysql");
var user = require("..//model/user");
var blog = require("../model/blog");
var fsWrite = require("../model/fsWrite");

/* GET login page. */


router.get('/', function(req, res, next) {
    fsWrite.WriteBlogLog("index");
    // console.log( getSession.getSession());
    req.session.lastpage = "/";
    console.log("req.session " + JSON.stringify(req.session));


    res.render("index",{title:"首页 | 李云皓的博客"});
    // });


});

// indexTwo
router.get('/indexTwo', function(req, res, next) {
    fsWrite.WriteBlogLog("indexTwo");
    req.session.lastpage = "/indexTwo";
    blog.findAll().then(function(result){
        console.log('query all blog');
        // for (var i = 0, usr; usr = result[i++];) {
        //     console.log('nae=' + usr.name + ', password=' + usr.password + ', mail=' + usr.mail);
        // }
        console.log("所有文章："+JSON.stringify(result));
        res.render('indexTwo', { title: '主页 | 李云皓的博客' ,data:result});
    });

});

// 博文书写页面
router.get('/writeBlog', function(req, res, next) {
    fsWrite.WriteBlogLog("writeBlog");

    console.log("data.title");
    res.render('writeBlog', { title: '写博客 | 李云皓的博客' });
});



router.post('/writeBlog', function(req, res, next) {
   var title = req.body.title;
   var content = req.body.content;
   var date = req.body.date;

   console.log("title " + title);
   console.log("content " + content);
   console.log("date " + date);
   // 写入数据库
   blog.create({
       // blogId: 1,
       blogTitle:title,
       blogDate :date,
       blogContent:content
   });
    res.send({ title: 'writeBlog' });
});


router.get('/writeBlogByMarkDown', function(req, res, next) {
    fsWrite.WriteBlogLog("writeBlog");

    console.log("data.title");
    res.render('writeBlogByMarkDown', { title: '写博客 | 李云皓的博客' });
});

// 博文详情
// router.get('/blogDetail', function(req, res, next) {
//     fsWrite.WriteBlogLog("blogDetail");
//
//     var  Id = req.query.Id;
//     console.log("Id:"+Id);
//     blog.findAll(
//         {
//             where: {
//                 blogId: Id
//             }
//         }
//     ).then(function(result){
//         console.log('query all blog');
//         // for (var i = 0, usr; usr = result[i++];) {
//         //     console.log('nae=' + usr.name + ', password=' + usr.password + ', mail=' + usr.mail);
//         // }
//         console.log("文章详情："+JSON.stringify(result));
//         res.render('blogDetail', { title: '博文详情 | 李云皓的博客' ,data:result});
//     });
//
// });


router.get('/users/loginCallBack',function (req,res) {

    res.render('loginCallBack', { title: 'loginCallBack' });
});



//微信公众号接入
router.get('/MP_verify_f5uGgVqxPYgaldMq.txt',function (req,res) {

    res.render('MP_verify_f5uGgVqxPYgaldMq', { title: 'MP_verify_f5uGgVqxPYgaldMq' });
});


module.exports = router;
