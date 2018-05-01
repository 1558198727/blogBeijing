var http = require('http')
var url ='http://www.imooc.com/learn/348'
var cheerio = require('cheerio')

// 加载File System读写模块
var fs = require('fs');
// 加载编码转换模块
var iconv = require('iconv-lite');

function filterChapters(html) {
   var $ = cheerio.load(html);
    //console.log(html)
   var chapters = $('.chapter');
   //  [{
   //     chaperTitle : '',
   //     videos :[
   //         title : '',
   //         id : ''
   //     ]
   // }]

    var courseData = []
    chapters.each(function () {
        var chapter = $(this)
        var chapterTitle = chapter.find('strong').text()
        var videos = chapter.find('.video').find('li')
        var chapterData ={
            chapterTitle : chapterTitle,
            videos : []
        }
        videos.each(function (item) {
            // console.log(videos.length)
            var video = $(this)
            var videoTitle = video.text()
            //var videoTitle = item.find('.icon-video type').text()
            var id = video.find('a').attr('href').split('video/')[1]
            //var id = item.attr('data-media-id')
            chapterData.videos.push({
                    title : videoTitle,
                    id : id
                })
        })
        courseData.push(chapterData)
    })
 return courseData
}

function  printCourseInfo(courseData) {
    var file = "E:\\imoocCrawler.txt";
    writeFile(file);
    readFile(file);
    // writeFile(file,html)
    // console.log(JSON.stringify(courseData))
    courseData.forEach(function (item) {
       var chapterTitle = item.chapterTitle.replace(/\s+/g, '')
        console.log(chapterTitle)
        writeFile(file,chapterTitle)
        item.videos.forEach(function (video) {
            var videotitle=video.title.replace(/\s+/g, '')
            console.log( '['+video.id+ '] '+ videotitle)
            writeFile(file,'['+video.id+ '] '+ videotitle)
        })
    })
}
http.get(url,function (res) {
    var html =''

    res.on('data',function (data) {
        html += data
    })

    res.on('end',function () {
        //console.log(html)
        var courseData=  filterChapters(html)

        printCourseInfo(courseData)

    })
}).on('error',function () {
    console.log('获取课程数据出错')
})
http
    .createServer(function (req,res) {
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('hello nodejs')
        res.end()
    })
    .listen(2018)



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
