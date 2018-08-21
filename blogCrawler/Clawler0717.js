var http = require('https')
var url ='https://www.askapatient.com/'
// var cheerio = require('cheerio')
//
// // 加载File System读写模块
// var fs = require('fs');
// // 加载编码转换模块
// var iconv = require('iconv-lite');



http.get(url,function (res) {
    var html =''

    res.on('data',function (data) {
        html += data
    })

    res.on('end',function () {
        console.log(html)


    })
}).on('error',function () {
    console.log('获取课程数据出错')
})

