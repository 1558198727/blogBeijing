/**
 * Created by 18468 on 2017/8/7.
 */
var fs = require('fs');
var xlsx = require('node-xlsx');

var list = xlsx.parse("test1.xlsx"); //读取excel

console.log(JSON.stringify(list));

var datas=[];
var data=[1,2,3];
var data1=[4,5,6];
datas.push(data);    //一行一行添加的 不是一列一列
datas.push(data1);
writeXls(datas);
exports.write = function writeXls(datas) {
    var buffer = xlsx.build([
        {
            name:'sheet1',
            data:datas
        }
    ]);
    fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});   //生成excel
};
