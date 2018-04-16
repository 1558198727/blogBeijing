var request = require('request');
var urls = [
    'https://blog.csdn.net/l1558198727/article/details/78752005',
    'https://blog.csdn.net/l1558198727/article/details/79936135',
    'https://blog.csdn.net/l1558198727/article/details/79919466',
    'https://blog.csdn.net/l1558198727/article/details/79919466',
    'https://blog.csdn.net/l1558198727/article/details/79917890',
    'https://blog.csdn.net/l1558198727/article/details/79764924',
    'https://blog.csdn.net/l1558198727/article/details/79342950',
    'https://blog.csdn.net/l1558198727/article/details/79342912',
    'https://blog.csdn.net/l1558198727/article/details/79312694',
    'https://blog.csdn.net/l1558198727/article/details/78865336',
    'https://blog.csdn.net/l1558198727/article/details/78865286',
    'https://blog.csdn.net/l1558198727/article/details/78865209',
    'https://blog.csdn.net/l1558198727/article/details/78767816',
    'https://blog.csdn.net/l1558198727/article/details/78761615',
    'https://blog.csdn.net/l1558198727/article/details/78690493',
    'https://blog.csdn.net/l1558198727/article/details/78672950',
    'https://blog.csdn.net/l1558198727/article/details/78672865',
    'https://blog.csdn.net/l1558198727/article/details/78672762',
    'https://blog.csdn.net/l1558198727/article/details/78639202',
    'https://blog.csdn.net/l1558198727/article/details/78639129',
    'https://blog.csdn.net/l1558198727/article/details/78608743',
    'https://blog.csdn.net/l1558198727/article/details/78608713',
    'https://blog.csdn.net/l1558198727/article/details/78608659',
    'https://blog.csdn.net/l1558198727/article/details/78608633',
    'https://blog.csdn.net/l1558198727/article/details/78608617',
    'http://blog.csdn.net/qq_39511059/article/details/79966229',
    'http://blog.csdn.net/qq_39511059/article/details/79966090',
    'http://blog.csdn.net/qq_39511059/article/details/79886712',
    'http://blog.csdn.net/qq_39511059/article/details/79658841',
    'http://blog.csdn.net/qq_39511059/article/details/78812498',
    'http://blog.csdn.net/qq_39511059/article/details/78807158',
    'http://blog.csdn.net/qq_39511059/article/details/78795967',
    'http://blog.csdn.net/qq_39511059/article/details/78690922',
    'http://blog.csdn.net/qq_39511059/article/details/78127513'
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
    var time = getRandom(3,10);
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