var socket_io = require("socket.io");
var socketIo = {};


socketIo.getWWWServer = function (server) {
    socketIo.SocketioStart(server);
};


socketIo.SocketioStart = function(server){ // http(s) server
    var  io = socket_io.listen(server);
    // var io = socket_io.listen(wwwServer);

    // var PORT = 3000;
    //客户端计数
    var clientCount = 0;
    //存储客户端socket
    var socketMap = {};

    // app.listen(80);

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

    io.on('connection',function (socket) {
        clientCount = clientCount + 1;
        socket.clientNum = clientCount;
        // socket.nickName = 'user ' + clientCount;
        console.log("已经连接");
        socketMap[clientCount] = socket;
        if(clientCount % 2 === 1){
            socket.emit("waiting","等待下一位玩家进入");
            console.log("等待下一位玩家进入");
        }else{
            if(socketMap[clientCount-1]){
                // socket.emit("start");
                // socketMap[clientCount-1].emit('start');
                console.log("两人都打开了游戏界面");
            }else{
                socket.emit("leave");
            }

        }

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


        socket.on("allReady",function(data){
            console.log("wsServer: you two can start now!");
            socket.emit("start");
            socketMap[clientCount-1].emit('start');
        });
        // io.emit('enter',socket.nickName + " comes in");
        socket.on('message',function (str) {
            io.emit('message',socket.nickName + 'says: ' +str);
        });

        socket.on('disconnect',function () {
            if(socket.clientNum % 2 === 0){
                if(socketMap[socket.clientNum-1]){
                    socketMap[socket.clientNum-1].emit("leave");
                }

            }else{
                if(socketMap[socket.clientNum+1]){
                    socketMap[socket.clientNum+1].emit("leave");
                }
            }
            // delete(socketMap[socket.clientNum]);
        })
    });
    console.log("scoket server listening on WWWWServer!");

};

module.exports= socketIo;
