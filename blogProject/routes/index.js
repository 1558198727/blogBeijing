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

    var  sql = 'SELECT * FROM user';
//查
    db.sequelize.query(sql).then(function (article) {
        // console.log("文章ID："+article.userId);
        console.log("文章ID1："+JSON.stringify(article[0]));
        article.forEach(function(item){
            console.log("文章ID："+item+'\n');
            // console.log( __filename );
        });
        res.render("index",{data: article[0],title:"首页 | 李云皓的博客"});
    })


});



// router.post('/users/login',function (req,res) {
//     fsWrite.WriteBlogLog("/users/login_post");
//
//
//
//     console.log("login");
//     console.log("phoneNumber:"+req.body.phoneNumber);
//     console.log("password:"+req.body.password);
//
//     // var md5 = crypto.createHash("md5");
//     // var newPas = md5.update(req.body.password).digest("hex");
//     //
//     // console.log("MD5Password:"+newPas);
//     user.findAll({
//         where : {
//             phoneNumber:req.body.phoneNumber,
//             password : req.body.password
//         }}).then(function (ret) {
//         if(ret.length === 0){
//             console.log('ret:'+JSON.stringify(ret));
//             res.send({status:false,desc:"账号或密码错误"});
//
//         }else{
//             console.log("ret1111"+JSON.stringify(ret[0]));
//             // req.session.userId=ret[0].userId;
//             // req.session.userName = ret[0].userName;
//             // req.session.role = ret[0].role;
//             // req.session.slogan = ret[0].slogan;
//             res.send({status:true,role:ret[0].role,desc:"登录成功"});
//         }
//     }).catch(function (err) {
//
//         console.log("err"+err);
//         res.send("出错");
//     })
//
// });
// indexTwo
router.get('/indexTwo', function(req, res, next) {
    fsWrite.WriteBlogLog("indexTwo");

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


// router.get('/users/loginCallBack',function (req,res) {
//
//     res.render('loginCallBack', { title: 'loginCallBack' });
// });

router.get('/ELuoSiDeFangKuai',function (req,res) {
    fsWrite.WriteBlogLog("ELuoSiDeFangKuai");

    // wsServer.start();
    res.render('ELuoSiDeFangKuai', { title: '俄罗斯方块 | 李云皓的博客' });
});

//微信公众号接入
router.get('/MP_verify_f5uGgVqxPYgaldMq.txt',function (req,res) {

    res.render('MP_verify_f5uGgVqxPYgaldMq', { title: 'MP_verify_f5uGgVqxPYgaldMq' });
});


module.exports = router;
