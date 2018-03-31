var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');
var blog = require("../model/blog");
var fsWrite = require("../model/fsWrite");
// var Sequelize = require('sequelize');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: false,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});
router.get("/", function(req, res, next){
// :docName
    fsWrite.WriteBlogLog("blogDetail");
    var  Id = req.query.Id;
    console.log("Id: " + Id);
    var blogTitle;
    var blogDate;
    var nextBlogTitle;
    var nextBlogId;
    var prevBlogTitle;
    var prevBlogId;

    prevBlogId = parseInt(Id) - 1;
    nextBlogId = parseInt(Id) + 1;

    //
    blog.findAll(
        {
            where: {
                blogId: prevBlogId
            }
        }
    ).then(function(result){
        if(result.length === 0){
            prevBlogId = 1;
            prevBlogTitle = "已经到顶！";
        }
        else {
            console.log("prevBlogTitle" + result[0].blogTitle);
            prevBlogTitle = result[0].blogTitle;
        }

    });

    blog.findAll(
        {
            where: {
                blogId: nextBlogId
            }
        }
    ).then(function(result){
        if(result.length === 0){
            // console.log("error" + error);
            nextBlogId = parseInt(nextBlogId) - 1;
            nextBlogTitle = "已经到底！";
        }
        else {
            console.log("nextBlogTitle" + result[0].blogTitle);
            nextBlogTitle = result[0].blogTitle;
        }

    });

    blog.findAll(
        {
            where: {
                blogId: Id
            }
        }
    ).then(function(result){

        console.log('query all blog');
        console.log("文章详情："+JSON.stringify(result));
        blogDate = result[0].blogDate;
        blogTitle = result[0].blogTitle;
        console.log('name:' + blogTitle);
        fs.readFile(__dirname+'/../public/doc/'+ blogTitle +'.txt', function(err, data){
            if(err){
                console.log("文件不存在！");
                res.send("文件不存在！");
            }else{
                // console.log("这个是data："+ data);
                htmlStr = marked(data.toString());
                // console.log("这个是htmlStr："+ htmlStr);
                // console.log(htmlStr);
                res.render('blogDetail', {doc: htmlStr,blogTitle:blogTitle,nextBlogTitle:nextBlogTitle,nextBlogId:nextBlogId,prevBlogTitle:prevBlogTitle,prevBlogId:prevBlogId,blogDate:blogDate,title:"博文详情 | 李云皓的博客"});
            }
        });
    });

});


// router.get("/", function(req, res){
//
//     res.render("index",{title:"首页 | 李云皓的博客"});
//
// });
module.exports = router;