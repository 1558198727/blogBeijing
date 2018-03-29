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
    // req.session.id = 11;
    // var sessionId = req.session.id;
    // console.log( "sessionId " + sessionId);
    // var  sql = 'SELECT * FROM user';
//查
//     db.sequelize.query(sql).then(function (article) {
//         // console.log("文章ID："+article.userId);
//         console.log("文章ID1："+JSON.stringify(article[0]));
//         article.forEach(function(item){
//             console.log("文章ID："+item+'\n');
//             // console.log( __filename );
//         });
//     req.session.id = 23;
//     var sess = req.session;//用这个属性获取session中保存的数据，而且返回的JSON数据
    console.log("之前");
    var lastpage  = "/";
    req.session.lastpage = lastpage;
    console.log("req.session " + JSON.stringify(req.session));
    console.log("之后");
    // res.redirect(req.session.lastpidage).catch(function (err) {
    //     console.log("err"+err);
    //     res.send("出错");
    // });//从session中读取
    // console.log("req.session " + JSON.stringify(sess));

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
    res.render('blogDetail', { title: 'writeBlog' });
});

// 博文详情
router.get('/blogDetail', function(req, res, next) {
    fsWrite.WriteBlogLog("blogDetail");

    var  Id = req.query.Id;
    console.log("Id:"+Id);
    blog.findAll(
        {
            where: {
                blogId: Id
            }
        }
    ).then(function(result){
        console.log('query all blog');
        // for (var i = 0, usr; usr = result[i++];) {
        //     console.log('nae=' + usr.name + ', password=' + usr.password + ', mail=' + usr.mail);
        // }
        console.log("文章详情："+JSON.stringify(result));
        res.render('blogDetail', { title: '博文详情 | 李云皓的博客' ,data:result});
    });

});


router.get('/users/loginCallBack',function (req,res) {

    res.render('loginCallBack', { title: 'loginCallBack' });
});



//微信公众号接入
router.get('/MP_verify_f5uGgVqxPYgaldMq.txt',function (req,res) {

    res.render('MP_verify_f5uGgVqxPYgaldMq', { title: 'MP_verify_f5uGgVqxPYgaldMq' });
});


module.exports = router;
