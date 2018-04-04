/**
 * Created by liyunhao on 2018/4/4.
 */
var Sequelize = require("sequelize");
var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var QQusers = sequelize.define('QQusers', {
        Id:{ //自增长视频Id,主键,整型
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        openId:{
            type:Sequelize.STRING(20)
        },
        accessToken:{
            type:Sequelize.STRING(50)
        },
        nickname:{
            type:Sequelize.STRING(50)
        },
        gender:{
            type:Sequelize.STRING(30)
        },
        province:{
            type:Sequelize.STRING(2)
        },
        city:{
            type:Sequelize.STRING(40)
        },
        year:{
            type:Sequelize.STRING(20)
        },
        figureurl:{
            type:Sequelize.STRING(10)
        },
        figureurl_1:{
            type:Sequelize.STRING(100)
        },
        figureurl_2:{
            type:Sequelize.STRING(100)
        },
        figureurl_qq_1:{
            type:Sequelize.STRING(100)
        },
        figureurl_qq_2:{
            type:Sequelize.STRING(100)
        },
        is_yellow_vip:{
            type:Sequelize.STRING(100)
        },
        vip:{
            type:Sequelize.STRING(2)
        },
        yellow_vip_level:{
            type:Sequelize.STRING(2)
        },
        level:{
            type:Sequelize.STRING(2)
        },
        is_yellow_year_vip:{
            type:Sequelize.STRING(4)
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =QQusers;