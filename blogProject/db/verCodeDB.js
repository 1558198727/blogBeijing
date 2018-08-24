/**
 * Created by liyunhao on 2018/8/24.
 */
var Sequelize = require("sequelize");
var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var verCode = sequelize.define('verCode', {
        phoneNum:{
            type:Sequelize.STRING(11)
        },
        code:{
            type:Sequelize.STRING(4)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =verCode;