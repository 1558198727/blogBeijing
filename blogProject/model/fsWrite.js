var fs = require('fs');

// 文件读写

var WriteBlogLog = function (page) {
    var date = new Date();
    var file = "C:\\BlogLog.txt";
    var write_date = "当前访问的时间为" + date + '\r\n'+page +'\r\n';
    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
};
exports.WriteBlogLog=WriteBlogLog;

var WriteUsersInfo = function (info) {
    var file = "C:\\UsersInfo.txt";
    var write_date = "用户信息"  + '\r\n';
    write_date += "openId:" + info.openId + '\r\n';
    write_date += "accessToken:" + info.accessToken + '\r\n';
    write_date += "nickname:" + info.nickname + '\r\n';
    write_date += "gender:" + info.gender + '\r\n';
    write_date += "province:" + info.province + '\r\n';
    write_date += "city:" + info.city + '\r\n';
    write_date += "figureurl:" + info.figureurl + '\r\n';
    write_date += "figureurl_1:" + info.figureurl_1 + '\r\n';
    write_date += "figureurl_2:" + info.figureurl_2 + '\r\n';
    write_date += "figureurl_qq_1:" + info.figureurl_qq_1 + '\r\n';
    write_date += "figureurl_qq_2:" + info.figureurl_qq_2 + '\r\n';
    write_date += "==================================================================================" + '\r\n'+ '\r\n';

    console.log(write_date);
    fs.appendFile(file, write_date, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
};
exports.WriteUsersInfo=WriteUsersInfo;