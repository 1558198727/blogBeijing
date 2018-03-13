var socket = io("ws://localhost:80");

var local = new Local(socket);
// local.start();
var remote = new Romote(socket);
// remote.start(2,2);
// remote.bindEvents();
socket.on("waiting",function (str) {
    document.getElementById("waiting").innerHTML = str;
});

