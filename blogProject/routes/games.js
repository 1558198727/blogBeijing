var express = require('express');
var router = express.Router();
var wsServer = require("../model/wsServer");
var fsWrite = require("../model/fsWrite");


router.get('/ELuoSiDeFangKuai',function (req,res) {
    fsWrite.WriteBlogLog("games/ELuoSiDeFangKuai");
    // wsServer.SocketioStart();
    req.session.lastpage = "/games/ELuoSiDeFangKuai";
    // req.session.isLogin = false;
    // wsServer.start();
    res.render('ELuoSiDeFangKuai', { title: '俄罗斯方块 | 李云皓的博客' });
});

router.get('/',function (req,res) {
    // fsWrite.WriteBlogLog("ELuoSiDeFangKuai");
    // wsServer.SocketioStart();
    req.session.lastpage = "/games/QQDesktop";
    // req.session.isLogin = false;
    // wsServer.start();
    res.render('QQDesktop', { title: '俄罗斯方块 | 李云皓的博客' });
});

module.exports = router;