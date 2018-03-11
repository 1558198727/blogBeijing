var socket_io = require("socket.io");

var socketIo = {};
socketIo.getSocketio = function(server){ // http(s) server

    var io = socket_io.listen(server);

// var PORT = 3000;
//客户端计数
    var clientCount = 0;
//存储客户端socket
    var socketMap = {};

// app.listen(80);

    var bindListener = function(socket,event){
        socket.on(event,function(data){
            if(socket.clientNum % 2 == 0){
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
        if(clientCount % 2 == 1){
            socket.emit("waiting","waiting for another person");
            console.log("waiting for another person");
        }else{
            if(socketMap[clientCount-1]){
                socket.emit("start");
                socketMap[clientCount-1].emit('start');
                console.log("can start");
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
        // io.emit('enter',socket.nickName + " comes in");
        socket.on('message',function (str) {
            io.emit('message',socket.nickName + 'says: ' +str)
        });

        socket.on('disconnect',function () {
            if(socket.clientNum % 2 == 0){
                if(socketMap[socket.clientNum-1]){
                    socketMap[socket.clientNum-1].emit("leave");
                }

            }else{
                if(socketMap[socket.clientNum+1]){
                    socketMap[socket.clientNum+1].emit("leave");
                }
            }
            delete(socketMap[socket.clientNum]);
        })
    });
    console.log("scoket server listening on port" + "socket"+"!")

};






module.exports= socketIo;
