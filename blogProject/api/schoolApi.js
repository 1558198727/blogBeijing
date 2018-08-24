var crawler = require("../model/crawler");
var fsWrite = require("../model/fsWrite");
var dreamArtsSignUpDB = require("../db/dreamArtsSignUpDB");
var mysql = require("../db/mysql");
var verCodeDB = require("../db/verCodeDB");
var SMSVerificationCode = require("../model/SMSVerificationCode");

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
    var phoneNum = req.body.phoneNum;
    var sql =' select code ' +
             ' from verCode' +
             ' where phoneNum = "'+phoneNum+'"';
    mysql.sequelize.query(sql).then(function (DBCode){
        code = req.body.code;
        console.log("code: "+code+" "+JSON.stringify(DBCode) + DBCode[0][0].code );
        if(DBCode[0][0].code===code){
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
        }else{
            callback({status:"验证码错误！"});
        }
    });

};

exports.postDreamArtsSignUpSendCode = function (req,callback) {
    var phoneNum = req.body.phoneNum;
    var code="";
    for(var i=0;i<4;i++)
        code += Math.floor(Math.random()*10);

    SMSVerificationCode.sendSMSCode(phoneNum,code,function (status,msg) {
        if(!status){
            callback({status:status,msg:msg});
        }
        var sql =
            ' select code ' +
            ' from vercode ' +
            ' where phoneNum = "' + phoneNum + '"';
        mysql.sequelize.query(sql).then(function (students) {
            console.log("length " + students[0].length);
            console.log(JSON.stringify(students[0]));
            if(students[0].length === 0){
                var sql1 = 'insert into verCode (phoneNum, code) VALUES("'+phoneNum+'","'+code+'");';
                mysql.sequelize.query(sql1).then(function (students) {
                    console.log("注册成功！");
                    callback({status:status,msg:msg});
                });

            }else{
                var sql2 =
                    ' update verCode ' +
                    ' SET code = "'+code+'" ' +
                    ' where phoneNum = "'+phoneNum+'"';

                mysql.sequelize.query(sql2).then(function(){
                    console.log("修改验证码成功！");
                    callback({status:status,msg:msg});
                })
            }
        });
    });


};