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
var urls = ['https://blog.csdn.net/l1558198727/article/details/78752005','https://blog.csdn.net/l1558198727/article/details/79936135']; // 填写你需要刷的文章地址
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
}, 5000); // 这里的5000  代表的 5*1000ms执行一次



