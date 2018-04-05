var express = require('express');
var router = express.Router();
var indexApi = require("../api/indexApi");


/* GET login page. */


router.get('/', function(req, res, next) {
    indexApi.getIndex(req,function () {
        res.render("index",{title:"首页 | 李云皓的博客"});
    });
});

// indexTwo
router.get('/indexTwo', function(req, res, next) {
    indexApi.getIndexTwo(req,function (data) {
        res.render('indexTwo', { title: '主页 | 李云皓的博客' ,data:data});
    });

});

// 博文书写页面
// router.get('/writeBlog', function(req, res, next) {
//     indexApi.getWriteBlog(function () {
//         res.render('writeBlog', { title: '写博客 | 李云皓的博客' });
//     })
// });

// router.post('/writeBlog', function(req, res, next) {
//    var title = req.body.title;
//    var content = req.body.content;
//    var date = req.body.date;
//
//    console.log("title " + title);
//    console.log("content " + content);
//    console.log("date " + date);
//    // 写入数据库
//    blog.create({
//        // blogId: 1,
//        blogTitle:title,
//        blogDate :date,
//        blogContent:content
//    });
//     res.send({ title: 'writeBlog' });
// });


router.get('/writeBlogByMarkDown', function(req, res, next) {
    indexApi.getWriteBlogByMarkDown(function () {
        res.render('writeBlogByMarkDown', { title: '写博客 | 李云皓的博客' });
    });
});

router.post('/writeBlogByMarkDown', function(req, res, next) {

    indexApi.postWriteBlogByMarkDown(req,function () {
        res.send({ title: '写博客 | 李云皓的博客' });
    });

});



router.get('/users/loginCallBack',function (req,res) {
    indexApi.getUsersLoginCallBack(function () {
        res.render('loginCallBack', { title: 'loginCallBack' });
    })
});



//微信公众号接入
router.get('/MP_verify_f5uGgVqxPYgaldMq.txt',function (req,res) {
    indexApi.getMP(function () {
        res.render('MP_verify_f5uGgVqxPYgaldMq', { title: 'MP_verify_f5uGgVqxPYgaldMq' });
    })

});

module.exports = router;
