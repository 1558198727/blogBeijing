var express = require('express');
var router = express.Router();
var fs = require('fs');
var Sequelize = require('sequelize');
var db = require("../../blogProject/model/mysql");
var user = require("../../blogProject/model/user");
var blog = require("../../blogProject/model/blog");
// 文件读写
var file = "C:\\BlogLog.txt";

/* GET login page. */
router.get('/users/login', function(req, res, next) {
    console.log('/users/login');
    res.render('login', { title: 'Mian Page' });
});


router.get('/', function(req, res, next) {
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"index" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
    var  sql = 'SELECT * FROM user';
//查
    db.sequelize.query(sql).then(function (article) {
        // console.log("文章ID："+article.userId);
        console.log("文章ID1："+JSON.stringify(article[0]));
        article.forEach(function(item){
            console.log("文章ID："+item+'\n');
            // console.log( __filename );
        });
        res.render("index",{data: article[0],title:"我的主页"});
    })


});



router.post('/users/login',function (req,res) {
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"user/login" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });



    console.log("login");
    console.log("phoneNumber:"+req.body.phoneNumber);
    console.log("password:"+req.body.password);

    // var md5 = crypto.createHash("md5");
    // var newPas = md5.update(req.body.password).digest("hex");
    //
    // console.log("MD5Password:"+newPas);
    user.findAll({
        where : {
            phoneNumber:req.body.phoneNumber,
            password : req.body.password
        }}).then(function (ret) {
        if(ret.length === 0){
            console.log('ret:'+JSON.stringify(ret));
            res.send({status:false,desc:"账号或密码错误"});

        }else{
            console.log("ret1111"+JSON.stringify(ret[0]));
            // req.session.userId=ret[0].userId;
            // req.session.userName = ret[0].userName;
            // req.session.role = ret[0].role;
            // req.session.slogan = ret[0].slogan;
            res.send({status:true,role:ret[0].role,desc:"登录成功"});
        }
    }).catch(function (err) {

        console.log("err"+err);
        res.send("出错");
    })

});
// indexTwo
router.get('/indexTwo', function(req, res, next) {
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"indexTwo" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });



    blog.findAll().then(function(result){
        console.log('query all blog');
        // for (var i = 0, usr; usr = result[i++];) {
        //     console.log('nae=' + usr.name + ', password=' + usr.password + ', mail=' + usr.mail);
        // }
        console.log("所有文章："+JSON.stringify(result));
        res.render('indexTwo', { title: 'indexTwo' ,data:result});
    });

});

// 博文书写页面
router.get('/writeBlog', function(req, res, next) {
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"writeBlog" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });

    console.log("data.title");
    res.render('writeBlog', { title: 'writeBlog' });
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
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"blogDetail" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });



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
        res.render('blogDetail', { title: 'blogDetail' ,data:result});
    });

});


router.post('/users/loginCallBack',function (req,res) {

    res.render('loginCallBack', { title: 'loginCallBack' });
});

router.get('/ELuoSiDeFangKuai',function (req,res) {
    var date = new Date();
    var write_date = "当前访问的时间为" + date + '\r\n'+"ELuoSiDeFangKuai" +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });


    // wsServer.start();
    res.render('ELuoSiDeFangKuai', { title: 'ELuoSiDeFangKuai' });
});

//微信公众号接入
router.get('/MP_verify_f5uGgVqxPYgaldMq.txt',function (req,res) {

    res.render('MP_verify_f5uGgVqxPYgaldMq', { title: 'MP_verify_f5uGgVqxPYgaldMq' });
});


module.exports = router;
