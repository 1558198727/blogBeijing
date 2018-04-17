var crawler = require("../model/crawler");
var fsWrite = require("../model/fsWrite");

exports.getReturnData = function (callback) {
    fsWrite.WriteBlogLog("getReturnData");
    crawler.getReturnData(callback);
};