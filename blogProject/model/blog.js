/**
 * Created by yaohan on 2018/1/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var blog = sequelize.define('blog', {
        blogId:{ //自增长视频Id,主键,整型
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        blogTitle: { //视频作者ID
            type:Sequelize.STRING(255),
        },
        blogDate:{//视频封面图片URL
            type:Sequelize.DATE

        },
        blogContent:{//视频封面图片URL
            type:Sequelize.STRING(500),
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =blog;