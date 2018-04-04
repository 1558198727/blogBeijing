var blogDB = require("../DB/blogDB");
var fsWrite = require("../model/fsWrite");

/* GET login page. */

exports.getIndex = function (req,callback) {
    req.session.lastpage = "/";
    fsWrite.WriteBlogLog("index");
    // console.log( getSession.getSession());
    req.session.lastpage = "/";
    callback();
};

// indexTwo
exports.getIndexTwo = function (req,callback) {
    fsWrite.WriteBlogLog("indexTwo");
    req.session.lastpage = "/indexTwo";
    blogDB.findAll().then(function(result){
        console.log("查找所有博客");
        console.log("所有文章："+JSON.stringify(result));
        callback(result);

    })
};

// 博文书写页面
exports.getWriteBlog = function(callback) {
    fsWrite.WriteBlogLog("writeBlog");
    callback();
};


//已经弃用
// exports.postWriteBlog = function(req,callback) {
//     var title = req.body.title;
//     var content = req.body.content;
//     var date = req.body.date;
//
//     console.log("title " + title);
//     console.log("content " + content);
//     console.log("date " + date);
//     // 写入数据库
//     blogDB.create({
//         // blogId: 1,
//         blogTitle:title,
//         blogDate :date,
//         blogContent:content
//     });
//     callback();
// };


exports.getWriteBlogByMarkDown = function(callback) {
    fsWrite.WriteBlogLog("writeBlogByMarkDown");
    callback();
};

exports.postWriteBlogByMarkDown = function(req, callback) {
    fsWrite.WriteBlogLog("writeBlogByMarkDown");
    var newBlog = req.body;
    blogDB.create({
        // blogId: 1,
        blogTitle:newBlog.title,
        blogAnnotation:newBlog.annotation,
        blogDate :newBlog.date,
        blogContent:newBlog.content
    });
    console.log("写入的newBlog: " +JSON.stringify(newBlog));
    callback();
};



exports.getUsersLoginCallBack = function (callback) {
    fsWrite.WriteBlogLog("loginCallBack");
    callback();
};

//微信公众号接入
exports.getMP = function (callback) {
    fsWrite.WriteBlogLog("MP_verify_f5uGgVqxPYgaldMqTxt");
    callback();
};