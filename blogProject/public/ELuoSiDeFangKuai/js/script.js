var socket = io("ws://liyunhao.cn:80");
//
local = new Local(socket);
remote = new Romote(socket);
// remote.start(2,2);
// remote.bindEvents();
socket.on("waiting",function (str) {
    document.getElementById("waiting").innerHTML = str;
});


