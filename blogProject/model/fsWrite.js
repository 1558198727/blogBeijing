var fs = require('fs');

// 文件读写
var file = "C:\\BlogLog.txt";
var WriteBlogLog = function (page) {
    var date = new Date();
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