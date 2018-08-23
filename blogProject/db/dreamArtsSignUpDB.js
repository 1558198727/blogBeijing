/**
 * Created by liyunhao on 2018/8/22.
 */
var Sequelize = require("sequelize");
var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var LeavingAMessage = sequelize.define('dreamArtsSignUp', {

        stuId:{ //自增长学生的学号,主键
            type:Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(20)
        },
        qqNum:{
            type:Sequelize.STRING(20)
        },
        phoneNum:{
            type:Sequelize.STRING(20)
        },
        intro:{
            type:Sequelize.STRING(5000)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =LeavingAMessage;