var request = require('request');
var urls = [

    'https://m.weibo.cn/status/4219449899290219?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4218214856433662?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4219449899290219?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4218214856433662?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4218104630366670?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4217443297468438?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4216842354077061?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4216543585917692?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4216537407041752?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4215987785983884?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4215411605698893?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4215411114878346?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://m.weibo.cn/status/4215408204283201?wm=3333_2001&from=1084193010&sourcetype=qq&featurecode=newtitle',
    'https://blog.csdn.net/l1558198727/article/details/79919466',
    'https://blog.csdn.net/l1558198727/article/details/79827287',
    'https://blog.csdn.net/l1558198727/article/details/79917890'
];
var SubUrls1 =[];
var SubUrls2 =[];
var SubUrls3 =[];

var getABlog = function () {
    var blogGroup =  getRandom(0,2);
    console.log("获取的随机组数是： "+blogGroup);
    var GroupLen;
    var blogIndex;
    GroupLen = urls.length;
    blogIndex = getRandom(0,GroupLen);
    console.log("blogIndex :"+ blogIndex);
    return urls[blogIndex];
    // if(blogGroup == 0){
    //     GroupLen = SubUrls1.length;
    //     blogIndex = getRandom(0,GroupLen);
    //     console.log("blogIndex :"+ blogIndex);
    //     return SubUrls1[blogIndex];
    // }else if (blogGroup == 1){
    //     GroupLen = SubUrls2.length;
    //     blogIndex =getRandom(0,GroupLen) - 1;
    //     return SubUrls2[blogIndex];
    // }else{
    //     GroupLen = SubUrls3.length;
    //     blogIndex =getRandom(0,GroupLen) - 1;
    //     return SubUrls3[blogIndex];
    // }

};
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
var count = 0; // 刷了多少次
var len = urls.length; // 需要刷的文章篇数
var co = 0; // 为了循环刷新
function start() {

    count = count + 1;
    var blogUrl = getABlog();
    console.log('blogUrl: ' + blogUrl);
    request(blogUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('成功 ' + count);
            console.log("LogUrl :" +blogUrl);
        }
    })
    co = co + 1;
    if (co == len) {
        co = 0;
    }
    var time = getRandom(1,10);
    console.log("getRandom :" + time);
    setTimeout(function () {
        start()
    },time * 1000);
}
urls.forEach(function (value,index) {
    // console.log("index: " + index);
    if(index % 3 ==0){
        SubUrls1.push(value)
    }else if(index % 3 ==0){
        SubUrls2.push(value)
    }else{
        SubUrls3.push(value)
    }

});
start();