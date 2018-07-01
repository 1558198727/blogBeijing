var request = require('request');
var https = require('https');
var cheerio = require('cheerio');
var url =  "https://blog.csdn.net/l1558198727/";
var iconv = require('iconv-lite');


// 加载File System读写模块
var fs = require('fs');
// 加载编码转换模块


function filterChapters(html) {
    var $ = cheerio.load(html);
    //console.log(html)
    var grade = $('.grade-box');



        var data = grade.find('dl:nth-child(2)').find('dd').attr('title');
        console.log("data :"+ data);

    return data
}

function  printCourseInfo(courseData) {
    var file = "E:\\imoocCrawler.txt";
    writeFile(file);
    readFile(file);
    // writeFile(file,html)
    // console.log(JSON.stringify(courseData))
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle.replace(/\s+/g, '')
        console.log(chapterTitle)
        writeFile(file,chapterTitle)
        item.videos.forEach(function (video) {
            var videotitle=video.title.replace(/\s+/g, '')
            console.log( '['+video.id+ '] '+ videotitle)
            writeFile(file,'['+video.id+ '] '+ videotitle)
        })
    })
}
https.get(url,function (res) {
    var html ='';

    res.on('data',function (data) {
        html += data
    });

    res.on('end',function () {
        //console.log(html)
        var Data=  filterChapters(html);

        //printCourseInfo(courseData);
        writeFile('E:\\CSDNVisitors.txt',Data);

    })
}).on('error',function () {
    console.log('获取课程数据出错')
});


// 文件读写


function writeFile(file,html){
    // 测试用的中文
    var str = "\r\n"+html;
    // 把中文转换成字节数组
    var arr = iconv.encode(str, 'gbk');
    console.log(arr);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.appendFile(file, arr, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}

function readFile(file){
    fs.readFile(file, function(err, data){
        if(err)
            console.log("读取文件fail " + err);
        else{
            // 读取成功时
            // 输出字节数组
            console.log(data);
            // 把数组转换为gbk中文
            var str = iconv.decode(data, 'gbk');
            console.log(str);
        }
    });
}
