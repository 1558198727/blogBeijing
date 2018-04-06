var http = require('http');
var url ='http://ssdut.dlut.edu.cn/index/bkstz.htm';
var cheerio = require('cheerio');

// 加载File System读写模块
// var fs = require('fs');
// 加载编码转换模块
var iconv = require('iconv-lite');
var returnData;
function filterChapters(html) {
    var $ = cheerio.load(html);
    //console.log(html)
    var c_hzjl_list1 = $('.c_hzjl_list1 ul li');
    //  [{
    //     chaperTitle : '',
    //     videos :[
    //         title : '',
    //         id : ''
    //     ]
    // }]

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
    returnData = itemsData;
    return itemsData;

}
exports.getReturnData = function () {
    return returnData;
};
function  printCourseInfo(itemsData) {
    // var file = "E:\\imoocCrawler.txt";
    // writeFile(file);
    // readFile(file);
    // writeFile(file,html)
    // console.log(JSON.stringify(courseData))
    itemsData.forEach(function (item) {
        // var chapterTitle = item.chapterTitle.replace(/\s+/g, '');
        var itemTitle = item.itemTitle;
        var itemHref = item.itemHref;
        console.log(itemTitle);
        console.log(itemHref);
        // writeFile(file,chapterTitle);

    })
}
http.get(url,function (res) {
    var html ='';

    res.on('data',function (data) {
        html += data
    });

    res.on('end',function () {
        //console.log(html)
        var courseData=  filterChapters(html);
        printCourseInfo(courseData);

    })
}).on('error',function () {
    console.log('获取课程数据出错')
});
// http
//     .createServer(function (req,res) {
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.write('hello nodejs');
//         res.end()
//     })
//     .listen(2018);



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
