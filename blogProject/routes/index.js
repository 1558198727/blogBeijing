var express = require('express');
var router = express.Router();
var fs = require('fs');
var Sequelize = require('sequelize');
var db = require("../../blogProject/model/mysql");
var user = require("../../blogProject/model/user");





/* GET login page. */

router.get('/users/login', function(req, res, next) {
    console.log('/users/login');
    res.render('login', { title: 'Mian Page' });
});


router.get('/', function(req, res, next) {
    var date = new Date();
    var file = "D:\\BlogLog.txt";
    var write_date = "当前访问的时间为" + date + '\r\n';
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
        })
        res.render("index",{data: article[0],title:"我的主页"});
    })


});



router.post('/users/login',function (req,res) {
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

router.get('/indexTwo', function(req, res, next) {
    res.render('indexTwo', { title: 'Mian Page' });
});

router.get('/blogDetail', function(req, res, next) {
    res.render('blogDetail', { title: 'blogDetail' });
});




router.post('/users/loginCallBack',function (req,res) {

    res.render('loginCallBack', { title: 'loginCallBack' });
});
module.exports = router;
