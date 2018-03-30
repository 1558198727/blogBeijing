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
            console.log(data);
            htmlStr = marked(data.toString());
            res.render('doc', {doc: htmlStr});
        }
    });
});

module.exports = router;