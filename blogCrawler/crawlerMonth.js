var request = require('request');
var https = require('https');
var cheerio = require('cheerio');
var excelWriter = require('./excelWriter');

var url =  "https://blog.csdn.net/l1558198727/";
var count = 0; // 刷了多少次
var urls = [];//存放url的数组
var blogInfos=[];

var getRandom = function (a,b) {
    var len = b - a;
    var start = a;
    var number =  Math.floor(Math.random()*len + start);
    if(number>=a && number<=b){
        return number;
    }
    else {
        return a;
    }
};
var getAllUrls = function (a,b,callback) {
    var urlCounter = 1;//url 总数
    var selectUrl = function (html) {

        var $ = cheerio.load(html);
        //console.log(html)
        var items = $('.article-item-box');
        items.each(function (){
            var item = $(this);
            var title =  item.find("h4").find("a").text();
            var blogurl =  item.find("h4").find("a").attr('href');
            var readNum = item.find(".info-box").find("p").eq(1).text().replace("阅读数：",'').replace(/[\r\n]/g,"").replace(/\ +/g,"");
            title = title.replace("原",'');
            title = title.replace(/\s+/g, '');
            title = title.replace(/\s+/g, '');
            // console.log("title :" + title);
            // console.log(urlCounter++ +"  " + "readNum :" + readNum);
            // console.log("readNum :" + blogurl);
            var blogInfo =[];
            blogInfo.push(title);
            blogInfo.push(blogurl);
            blogInfo.push(readNum);
            blogInfos.push(blogInfo);

            urls.push(blogurl);
        });



    };

    var listUrl = [];
    var flagUrl = 0;
    for(var i = a ; i <= b;i++){

        listUrl.push(url + "article/month/2018/10/"+i);

    }

    listUrl.forEach(function (item) {
        var html ='';
        https.get(item,function (res) {

            res.on('data',function (data) {
                html += data;
            });

            res.on('end',function () {

                //console.log(html);
                selectUrl(html);
                flagUrl ++;//计算成功得到几个页面的url
                if(flagUrl === listUrl.length ){
                    console.log(JSON.stringify(blogInfos));
                    excelWriter.write(blogInfos);
                    //callback();
                }

            });
        }).on('error',function () {
            console.log('获取课程数据出错');
        });

    });




};

var getABlog = function () {

    var blogIndex;
    GroupLen = urls.length;

    blogIndex = getRandom(0,GroupLen-1);
    console.log("blogIndex :"+ blogIndex);
    return urls[blogIndex];

};

function start() {

    count = count + 1;
    var blogUrl = getABlog();
    console.log('blogUrl: ' + blogUrl);
    request(blogUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('成功 ' + count);
            console.log("LogUrl :" +blogUrl);
        }
    });

    var time = getRandom(1,10);
    console.log("getRandom :" + time);
    setTimeout(function () {
        start()
    },time * 1000);
}

getAllUrls(1,2,start);