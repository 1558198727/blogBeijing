var express = require('express');
var router = express.Router();
var gamesApi = require("../api/gamesApi");

router.get('/',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('QQDesktop', { title: '游戏桌面 | 李云皓的博客' });
    })
});

router.get('/ELuoSiDeFangKuai',function (req,res) {
    gamesApi.getELuoSiDeFangKuai(req,function () {
        res.render('ELuoSiDeFangKuai', { title: '俄罗斯方块 | 李云皓的博客' });
    })

});



router.get('/BieCaiBaiKuai',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_BieCaiBaiKuai', { title: '别踩白块 | 李云皓的博客' });
    })
});

router.get('/HuaBan',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_HuaBan', { title: '画板 | 李云皓的博客' });
    })
});



router.get('/JianFengChaZhen',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_JianFengChaZhen', { title: '见缝插针 | 李云皓的博客' });
    })
});

router.get('/MoFang',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_MoFang', { title: '魔方 | 李云皓的博客' });
    })
});

router.get('/SheJiYouXiOne',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_SheJiYouXiOne', { title: '射击游戏1 | 李云皓的博客' });
    })
});

router.get('/ShuiGuoRenZhe',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_ShuiGuoRenZhe', { title: '水果忍者 | 李云皓的博客' });
    })
});

router.get('/TanChiShe',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_TanChiShe', { title: '贪吃蛇 | 李云皓的博客' });
    })
});

router.get('/TanKeDaZhan',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_TanKeDaZhan', { title: '坦克大战 | 李云皓的博客' });
    })
});

router.get('/WuZiQi',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_WuZiQi', { title: '五子棋 | 李云皓的博客' });
    })
});

router.get('/XiaoXiaoLe',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_XiaoXiaoLe', { title: '消消乐 | 李云皓的博客' });
    })
});

router.get('/YiZhiYouXiOne',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_YiZhiYouXiOne', { title: '益智游戏1 | 李云皓的博客' });
    })
});

router.get('/ZhongGuoXiangQi',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_ZhongGuoXiangQi', { title: '中国象棋 | 李云皓的博客' });
    })
});

router.get('/ZhuoQiu',function (req,res) {
    gamesApi.getGameIndex(req,function () {
        res.render('Game_ZhuoQiu', { title: '桌球 | 李云皓的博客' });
    })
});
module.exports = router;