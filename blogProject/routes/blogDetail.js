var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');

router.get("/:docName", function(req, res, next){
    console.log('name:' + req.params.docName);
    fs.readFile(__dirname+'/../public/doc/'+ req.params.docName +'.md', function(err, data){
        if(err){
            console.log("文件不存在！");
            res.send("文件不存在！");
        }else{
            console.log("这个是data："+ data);
            htmlStr = marked(data.toString());
            console.log("这个是htmlStr："+ htmlStr);
            // console.log(htmlStr);
            res.render('blogDetail', {doc: htmlStr});
        }
    });
    // res.end();
});


router.get("/", function(req, res){

    res.render("index",{title:"首页 | 李云皓的博客"});

});
module.exports = router;