var http = require('http');
var url ='http://ssdut.dlut.edu.cn/index/bkstz.htm';
var cheerio = require('cheerio');

// 加载编码转换模块
var iconv = require('iconv-lite');
function filterChapters(html) {
    var $ = cheerio.load(html);
    //console.log(html)
    var c_hzjl_list1 = $('.c_hzjl_list1 ul li');

    var itemsData = [];
    c_hzjl_list1.each(function () {
        var item = $(this);
        var itemTitle = item.find('a').text();
        var itemHref = "http://ssdut.dlut.edu.cn/"+ item.find('a').attr('href').split("../")[1];
        var itemData ={
            itemTitle : itemTitle,
            itemHref : itemHref
        };

        itemsData.push(itemData);
    });

    return itemsData;
}

function  printCourseInfo(itemsData) {

    itemsData.forEach(function (item) {
        var itemTitle = item.itemTitle.replace(/\s+/g, '');
        var itemHref = item.itemHref;
        console.log(itemTitle);
        console.log(itemHref);
        // writeFile(file,chapterTitle);
    })
}
function startHttpGet(callback) {
    http.get(url,function (res) {
        var html ='';

        res.on('data',function (data) {
            html += data
        });
        res.on('end',function () {
            Data =  filterChapters(html);
            // printCourseInfo(Data);
            // setTimeout(function () {
                callback(Data);
            // },5000)
        });
    }).on('error',function () {
        console.log('获取学生周知出错')
    });
}

exports.getReturnData = function (callback) {
    startHttpGet(callback);
};
