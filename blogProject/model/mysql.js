var Sequelize = require('sequelize');
var sequelize=new Sequelize(
    'yunBlog',
    'root',
    'Liyunhao0826',
    {
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        }
    }
);
exports.sequelize =  sequelize;

// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// var  sql = 'SELECT * FROM user';
// //查
// connection.query(sql,function (err, result) {
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }
//
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
// });
// var  sql = 'SELECT * FROM article';
// //查
// connection.query(sql,function (err, result) {
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }
//
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
// });
// connection.end();

