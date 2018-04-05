var fsWrite = require("../model/fsWrite");

exports.getQQLogin = function(callback) {

    fsWrite.WriteBlogLog("qqLogin");
    callback();
};

exports.getLogin = function(callback) {
    fsWrite.WriteBlogLog("/users/login");
    callback();
};