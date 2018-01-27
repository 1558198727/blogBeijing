var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    var date = new Date();

    var file = "C:\\BirthdayLog.txt";
    var write_date = "当前访问的时间为" + date + '\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });

  res.render('index', { title: 'index' });
});

router.get('/BirthdayCake', function(req, res, next) {
    res.render('BirthdayCake', { title: 'BirthdayCake' });
});

router.get('/image', function(req, res, next) {
    console.log("img");
    res.render('image', { title: 'img' });
});

router.get('/Memories', function(req, res, next) {
    console.log("Memories");
    res.render('Memories', { title: 'Memories' });
});


module.exports = router;
