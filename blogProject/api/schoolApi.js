var crawler = require("../model/crawler");
var fsWrite = require("../model/fsWrite");
var dreamArtsSignUpDB = require("../db/dreamArtsSignUpDB");
var mysql = require("../db/mysql");
exports.getReturnData = function (callback) {
    fsWrite.WriteBlogLog("getReturnData");
    crawler.getReturnData(callback);
};

exports.getDreamArtsSignUp = function (callback) {
    fsWrite.WriteBlogLog("getDreamArtsSignUp");
    crawler.getReturnData(callback);
};

exports.postDreamArtsSignUp = function (req,callback) {
    fsWrite.WriteBlogLog("postDreamArtsSignUp");
    var sql =
        ' SELECT * ' +
        ' from dreamArtsSignUp ' +
        ' where stuId = "'+req.body.stuId+'"';
    mysql.sequelize.query(sql).then(function (students) {
        console.log("length " + students[0].length);
        console.log(JSON.stringify(students[0]));
        if(students[0].length === 0){
            dreamArtsSignUpDB.create({
                stuId:req.body.stuId,
                name:req.body.name,
                qqNum:req.body.qqNum,
                phoneNum:req.body.phoneNum,
                intro:req.body.intro
            });
            console.log("注册成功！");
            callback({status:"注册成功！"});
        }else{
            var sql =
                ' update dreamArtsSignUp' +
                ' SET name = "'+req.body.name+' ",qqNum = "'+req.body.qqNum + '",phoneNum = "'+req.body.phoneNum+'",intro="'+req.body.intro+'"' +
                ' where stuId = "'+req.body.stuId+'"';
            mysql.sequelize.query(sql).then(function(){
                console.log("修改成功！");
                callback({status:"修改成功！"});
            })
        }
    });







};