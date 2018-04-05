var express = require('express');
var router = express.Router();
var gamesApi = require("../api/gamesApi");


router.get('/ELuoSiDeFangKuai',function (req,res) {
    gamesApi.getELuoSiDeFangKuai(req,function () {
        res.render('ELuoSiDeFangKuai', { title: '俄罗斯方块 | 李云皓的博客' });
    })

});

router.get('/',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('QQDesktop', { title: '游戏桌面 | 李云皓的博客' });
    })
});

module.exports = router;