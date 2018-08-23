var express = require('express');
var router = express.Router();
var schoolApi = require("../api/schoolApi");

router.get('/', function(req, res, next) {
    schoolApi.getReturnData(function (data) {

        console.log("爬取的数据为 " + JSON.stringify(data));
        res.render('studentKnow', { data:data,title: '学生周知 | 李云皓的博客'});
    });

    // })
});

router.get('/dreamArtsSignUp', function(req, res, next) {
    schoolApi.getDreamArtsSignUp(function () {
        res.render('dreamArtsSignUp', {title: '梦创2018招新'});
    })

});

router.post('/dreamArtsSignUp', function(req, res, next) {
    schoolApi.postDreamArtsSignUp(req,function (data) {
        res.send(data);
    })

});
module.exports = router;
