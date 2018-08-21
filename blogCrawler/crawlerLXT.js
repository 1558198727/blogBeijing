var request = require('request');
var https = require('https');
var cheerio = require('cheerio');

var url =  "https://www.jianshu.com/u/59ad78432c8a";
var count = 0; // 刷了多少次
var urls = [];//存放url的数组

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

        var items = $('.note-list');

        var li =  items.children('li');

        li.each(function () {
            var it = $(this);
            var suburl = it.children(".content").find("a").attr("href");

            blogurl = "https://www.jianshu.com"+suburl;
            urls.push(blogurl);
            if(urls.length==9){

                callback();
            }
        });


        // var blogurl =  item.find("h4").find("a").attr('href');
        // title = title.replace("原",'');
        // title = title.replace(/\s+/g, '');
        // title = title.replace(/\s+/g, '');
        //console.log("title :" + title);

        // urls.push(blogurl);




    };


    var html ='';
    https.get(url,function (res) {

        res.on('data',function (data) {
            html += data;
        });

        res.on('end',function () {

            //console.log(html);
            selectUrl(html);


        });
    }).on('error',function () {
        console.log('获取课程数据出错')
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

getAllUrls(1,1,start);