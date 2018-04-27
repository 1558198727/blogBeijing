var http = require('http');
var url ='http://ip.chinaz.com/';
var cheerio = require('cheerio');

// 加载编码转换模块
// var iconv = require('iconv-lite');
function filterChapters(html) {
    var $ = cheerio.load(html);
    //console.log(html)
    var biankuangp = $('.w50-0').eq(1);
    itemsData = biankuangp.text();
    // console.log("itemsData " + itemsData);
    return itemsData;
}

exports.SearchIP =function (ip,callback) {
    // ip="210.30.97.165";
    if(typeof(ip) === "undefined"  || ip === "172.0.0.1" ){
        callback('本机');
        return;
    }

    url = url + ip;
    http.get(url,function (res) {
        var html ='';

        res.on('data',function (data) {
            html += data
        });
        res.on('end',function () {
            Data =  filterChapters(html);
            console.log("Data "+Data);
             //printCourseInfo(Data);
            // setTimeout(function () {
            callback(Data);
            // },5000)
        });
    }).on('error',function () {
        console.log('出错')
    });
};


