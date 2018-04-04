var mysql = require("./mysql");
var sequelize = mysql.sequelize;
var user = sequelize.define('user', {
        userId:{ //自增长课程系列Id,主键,整型
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        phoneNumber: { //课程系列名称
            type: Sequelize.STRING
        },
        createDate:{
            type:Sequelize.DATE,
            default: sequelize.literal('CURRENT_TIMESTAMP')
        },
        password:{//课程系列的科目
            type:Sequelize.STRING(30)
        },
        userName: { //课程面向对象年级
            type: Sequelize.STRING(30)
        },
        userAge: { //课程系列课程数
            type: Sequelize.INTEGER
        },
        // userBackIdHeadUrl:{//身份证背面
        //     type:Sequelize.STRING(60)
        // },
        // registerDate:{//课程系列每节课内容
        //     type:Sequelize.DATE
        // },
        // gender:{
        //     type:Sequelize.INTEGER
        // },
        // cardNumber:{
        //     type:Sequelize.STRING(30)
        // },
        slogan:{
            type:Sequelize.STRING(255)
        },
    },
    {
        freezeTableName: true
    }
);

module.exports=user;