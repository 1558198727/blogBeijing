var express = require('express');
var router = express.Router();
var blogDetailApi = require("../api/blogDetailApi");

router.get("/", function(req, res, next){
    blogDetailApi.blogDetail(req,function (data) {
      res.render('blogDetail',{data:data,title:"博文详情 | 李云皓的博客"});
    });

});


// router.get("/", function(req, res){
//
//     res.render("index",{title:"首页 | 李云皓的博客"});
//
// });
module.exports = router;