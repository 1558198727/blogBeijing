var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
