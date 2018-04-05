var socket_io = require("socket.io");
var socketIo = {};
var userIsLogin;

//客户端计数
var clientCount = 0;
//存储客户端socket
var socketMap = {};
//获取用户的登陆状态

socketIo.getWWWServer = function (server) {
    socketIo.SocketioStart(server);
};

socketIo.getUserReq = function (req) {
    userIsLogin = req.session.isLogin;
};

socketIo.SocketioStart = function(server){ // http(s) server
    var  io = socket_io.listen(server);

    var bindListener = function(socket,event){
        socket.on(event,function(data){
            if(socket.clientNum % 2 === 0){
                if(socketMap[socket.clientNum-1]){
                    socketMap[socket.clientNum-1].emit(event,data);
                }

            }else{
                if(socketMap[socket.clientNum+1]){
                    socketMap[socket.clientNum+1].emit(event,data);
                }
            }
        })

    };

    //

    io.on('connection',function (socket) {
    // console.log(" socket.isSocket: " + socket.isSocket) ;//=== undefined
    console.log("userIsLogin : " + userIsLogin);
    if(userIsLogin === true && socket.isSocket === undefined){
        clientCount = clientCount + 1;
        socket.clientNum = clientCount;
        // socket.nickName = 'user ' + clientCount;
        console.log("登陆后已经创建socket连接");
        socket.isSocket = true;
        socketMap[clientCount] = socket;

        console.log("clientCount: " + clientCount);
        console.log("socketMap[clientCount]: " + socketMap[clientCount]);
        console.log("socket.clientNum: " + socket.clientNum);
        if(socket.clientNum % 2 === 1){
            socket.emit("waiting","等待下一位玩家进入");
            console.log("等待下一位玩家进入");
        }else{
            socket.emit("waiting","两位玩家已经上线！");
            socketMap[clientCount -1].emit("waiting","两位玩家已经上线！");
            socket.emit("ILoginByQQ","两位玩家已经上线！");
            // socketMap[clientCount -1].emit("I","两位玩家已经上线！");
            socketMap[clientCount].emit("start");
            socketMap[clientCount -1].emit("start");
            // socket.emit("ILoginByQQ");
        }
    }//else{
        //console.log("登陆后又回来了");
        // console.log("socket.clientNum: " + socket.clientNum);
        // if(socket.clientNum % 2 === 1){
        //     socket.emit("waiting","等待下一位玩家进入");
        //     console.log("等待下一位玩家进入");
        // }else{
        //     if(socketMap[clientCount-1]){
        //         // socket.emit("start");
        //         // socketMap[clientCount-1].emit('start');
        //         console.log("两人都打开了游戏界面");
        //     }else{
        //         socket.emit("leave");
        //     }
        //
        // }
    // }

        bindListener(socket,"init");

        bindListener(socket,"next");
        bindListener(socket,"rotate");
        bindListener(socket,"right");
        bindListener(socket,"down");

        bindListener(socket,"left");
        bindListener(socket,"fall");
        bindListener(socket,"fixed");
        bindListener(socket,"line");
        bindListener(socket,"time");
        bindListener(socket,"lose");
        bindListener(socket,"bottomLines");
        bindListener(socket,"addTailLines");
        bindListener(socket,"ILoginByQQ");
        bindListener(socket,"ILoginByQQToo");
        bindListener(socket,"ISendMyInfo");
        bindListener(socket,"ISendMyInfoToo");
        // bindListener(socket,"win");
        // socket.on("allReady",function(data){
        //     //     var socketMap = socketMap;
        //     //     var clientCount = clientCount;
        //     console.log("wsServer: you two can start now!");
        //     console.log("clientCount emit start : " + socket.clientNum );
        //     socket.emit("start");
        //     console.log("socket.clientNum -1 emit start : "+ socket.clientNum-1);
        //     // socketMap[socket.clientNum - 1].emit('start');
        // });
        // io.emit('enter',socket.nickName + " comes in");
        socket.on('message',function (str) {
            io.emit('message',socket.nickName + 'says: ' +str);
        });

        socket.on('disconnect',function () {
            console.log("disconnect");
            console.log("clientCount : "+ clientCount);
            if(socket.clientNum % 2 === 0){
                if(socketMap[socket.clientNum-1]){
                    socketMap[socket.clientNum-1].emit("waiting","玩家离开！");
                    socketMap[socket.clientNum-1].emit("leave");
                }

            }else{
                if(socketMap[socket.clientNum+1]){
                    socketMap[socket.clientNum+1].emit("waiting","玩家离开！");
                    socketMap[socket.clientNum+1].emit("leave");
                }
            }
            // delete(socketMap[socket.clientNum]);
        })
    });
    console.log("scoket server listening on WWWWServer!");

};

module.exports= socketIo;
