/**
 * Created by liyunhao on 2018/4/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var LeavingAMessage = sequelize.define('LeavingAMessage', {
        Id:{ //自增长视频Id,主键,整型
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        nickName:{
            type:Sequelize.STRING(50)
        },
        content:{
            type:Sequelize.STRING(5000)
        },
        headPhotoUrl:{
            type:Sequelize.STRING(100)
        },
        date:{
            type:Sequelize.DATE
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =LeavingAMessage;