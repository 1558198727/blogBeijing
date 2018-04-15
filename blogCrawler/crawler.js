// var http = require('https')
// var url ='https://blog.csdn.net/l1558198727/article/details/78752005'
//
//
// // for(var i = 0 ;i < 100;i++){
// //     console.log(i)
//     http.get(url,function (res) {
//         var html =''
//
//         res.on('data',function (data) {
//             html += data
//
//         })
//
//         res.on('end',function () {
//
//
//         })
//     }).on('error',function () {
//         console.log('获取博客出错')
//     })
//
// // }
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
    'https://blog.csdn.net/l1558198727/article/details/78608617'
]; // 填写你需要刷的文章地址
var count = 0; // 刷了多少次
var len = urls.length; // 需要刷的文章篇数
var co = 0; // 为了循环刷新
setInterval(function() {
    count = count + 1;
    request(urls[co], function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('成功 ' + count);
            // 每篇文章刷的次数=count/len
        }
    })
    co = co + 1;
    if (co == len) {
        co = 0;
    }
}, 10000); // 这里的5000  代表的 5*1000ms执行一次



