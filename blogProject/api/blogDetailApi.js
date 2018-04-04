var blogDB = require("../db/blogDB");
var marked = require('marked');
var fsWrite = require("../model/fsWrite");

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: false,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});
exports.blogDetail = function (Id,callback) {//找到请求的博文详情以及返回上一个和下一个博文标题
    // :docName
    console.log("Id: " + Id);
    var currBlog ={};
    var nextBlog={};
    var prevBlog = {};
    var data ={};
    prevBlog.Id = parseInt(Id) - 1;
    nextBlog.Id = parseInt(Id) + 1;

    blogDB.findAll(
        {
            where: {
                blogId: prevBlog.Id
            }
        }
    ).then(function(result){
        if(result.length === 0){
            prevBlog.Id = parseInt(prevBlog.Id) + 1;
            prevBlog.Title = "已经到顶！";
        }
        else {
            console.log("prevBlogTitle" + result[0].blogTitle);
            prevBlog.Title = result[0].blogTitle;
        }

    });

    blogDB.findAll(
        {
            where: {
                blogId: nextBlog.Id
            }
        }
    ).then(function(result){
        if(result.length === 0){
            // console.log("error" + error);
            nextBlog.Id = parseInt(nextBlog.Id) - 1;
            nextBlog.Title = "已经到底！";
        }
        else {
            console.log("nextBlogTitle" + result[0].blogTitle);
            nextBlog.Title = result[0].blogTitle;
        }
    });

    blogDB.findAll(
        {
            where: {
                blogId: Id
            }
        }
    ).then(function(result){

        if(result.length > 0){
            console.log('query TheBlog');
            console.log("文章详情："+JSON.stringify(result));
            currBlog.Date = result[0].blogDate;
            currBlog.Title = result[0].blogTitle;
            htmlStr = marked(result[0].blogContent.toString()) ;
            currBlog.Content =htmlStr;
            console.log('当前博客' + JSON.stringify(currBlog));
            // console.log('下一篇博客' + JSON.stringify(nextBlog));
            // console.log('前一篇博客' + JSON.stringify(prevBlog));

        }else{
            currBlog.Date = "...";
            currBlog.Title = "文章居然丢失了";
            currBlog.Content ="文章居然丢失了";
            console.log('当前博客' + JSON.stringify(currBlog));
        }
        data.currBlog = currBlog;
        data.nextBlog = nextBlog;
        data.prevBlog = prevBlog;
        console.log("data: "+JSON.stringify(data));
        callback(data);

    });
};



exports.creatUser = function(userInfo,callback){
    QQusers.findAll(
        {
            where: {
                openId: userInfo.openId
            }
        }
    ).then(function(result){
        if(result.length === 0){
            QQusers.create({
                openId:userInfo.openId,
                accessToken:userInfo.accessToken,
                nickname:userInfo.nickname,
                gender:userInfo.gender,
                province:userInfo.province,
                city:userInfo.city,
                year:userInfo.year,
                figureurl:userInfo.figureurl,
                figureurl_1:userInfo.figureurl_1,
                figureurl_2:userInfo.figureurl_2,
                figureurl_qq_1:userInfo.figureurl_qq_1,
                figureurl_qq_2:userInfo.figureurl_qq_2,
                is_yellow_vip:userInfo.is_yellow_vip,
                vip:userInfo.vip,
                yellow_vip_level:userInfo.yellow_vip_level,
                level:userInfo.level,
                is_yellow_year_vip:userInfo.is_yellow_year_vip
            });
            console.log("用户数据插入数据库成功");
        }
        else {
            console.log("该用户已经存在 插入失败");
        }
        callback();
    });

};
exports.createSession = function (req,userInfo) {
    req.session.isLogin = true;
    req.session.nickname = userInfo.nickname;
    req.session.gender = userInfo.gender;
    req.session.province = userInfo.province;
    req.session.city = userInfo.city;
    req.session.figureurl = userInfo.figureurl;
    req.session.figureurl_qq_2 = userInfo.figureurl_qq_2;
    req.session.openId = userInfo.openId;
    req.session.accessToken = userInfo.accessToken;
    console.log("创建session成功！");
};
