var fsWrite = require("../model/fsWrite");
var wsServer  = require("../model/wsServer");
exports.getELuoSiDeFangKuai = function (req,callback) {
    fsWrite.WriteBlogLog("games/ELuoSiDeFangKuai");
    req.session.lastpage = "/games/ELuoSiDeFangKuai";
    wsServer.getUserReq(req);
    callback();

};

exports.getGameIndex = function (req,callback) {
    fsWrite.WriteBlogLog("getGameIndex");
    req.session.lastpage = "/games/";
    callback();
};