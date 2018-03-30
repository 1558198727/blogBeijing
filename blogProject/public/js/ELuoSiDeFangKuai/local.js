var Local = function (socket) {
    //游戏对象
    var game = new Game();
    //时间间隔
    var time = 200;
    //定时器
    var timer = null;
    //时间计数器
    var timeCouter = 0;
    var tim = 0;
    //绑定键盘事件
    var binKeyEvent = function () {
        document.onkeydown = function (e) {
            if(e.keyCode === 38){//up
                game.rotate();
                socket.emit("rotate");
            }else if(e.keyCode ===39){//right
                game.right();
                socket.emit("right");
            }else if(e.keyCode ===40){//dwon
                game.down();
                socket.emit("down");
            }else if(e.keyCode ===37){//left
                game.left();
                socket.emit("left");
            }else if(e.keyCode ===32){//space
                game.fall();
                socket.emit("fall");
            }else if (e.keyCode === 72){
                // alert("dd");
                getChangTiao();

            }

        }
    };

    // 通过按钮操作
    // var control_fall1 = document.getElementById('control-fall1');
    // var control_fall2 = document.getElementById('control-fall2');
    // var control_up = document.getElementById('control-up');
    // var control_left = document.getElementById('control-left');
    // var control_down = document.getElementById('control-down');
    // var control_right = document.getElementById('control-right');
    
    var control_fall1 = function () {
        game.fall();
        socket.emit("fall");
    };
    var control_fall2 = function(){
        game.fall();
        socket.emit("fall");
    };
    var control_up = function(){
        game.rotate();
        socket.emit("rotate");
    };
    var control_left = function(){
        game.left();
        socket.emit("left");
    };
    var control_down = function(){
        game.down();
        socket.emit("down");
    };
    var control_right = function(){
        game.right();
        socket.emit("right");
    };




    


    //移动
    var move = function () {
        timeFunc();
        if(!game.down()){
            game.fixed();
            socket.emit("fixed");
            var lineNum = game.checkClear();
            if(lineNum){
                game.addScore(lineNum);
                socket.emit("line",lineNum);
                if(lineNum > 1){
                    var bottomLine = generataBottomLine(lineNum);
                    // alert("zhiqian");
                    socket.emit("bottomLines",bottomLine);
                    // alert("zhihou");
                }
            }
            var gameOver = game.checkGameOver();
            if(gameOver){
                game.gameOver(false);
                document.getElementById("remote_gameOver").innerHTML = "你赢了";
                socket.emit("lose");
            }else{
                var t = generateType();
                var d = generateDir();
                if(isChangTiao){
                    t = 0;
                    d = 1;
                }
                game.showNext(t,d);
                socket.emit('next',{type:t,dir:d});
            }

        }else{
            socket.emit("down");
        }
    };
    //随机生成干扰行
    var generataBottomLine = function(lineNum){
        var lines = [];
        for(var i =0; i<lineNum ; i++){
            var line = [];
            for(var j =0 ; j< 10; j++){
                line.push(Math.ceil(Math.random() * 2)-1);
            }
            lines.push(line);
        }
        return lines;
    };
    //计时函数
    var timeFunc = function () {
        timeCouter ++;
        if(timeCouter === 5){
            tim ++;
            timeCouter = timeCouter % 5;
            game.setTime(tim);
            socket.emit("time",tim);
            // if(tim % 1 === 0){
            //     game.addTailLines(generataBottomLine(1));
            // }
        }
    };
    //随机生成一个方块种类
    var generateType = function () {
        return Math.ceil((Math.random() * 7))-1;
    };

    //随机生成一个方向
    var generateDir = function () {
        return Math.ceil((Math.random() * 4))-1;
    };
    //开始
    var start = function () {
        var doms = {
            gameDiv : document.getElementById('local_game'),
            nextDiv : document.getElementById('local_next'),
            timeDiv : document.getElementById('local_time'),
            scoreDiv:document.getElementById('local_score'),
            resultDiv:document.getElementById('local_gameOver'),
            headPhoto:document.getElementById('remote_headPhoto'),
            nickName:document.getElementById('remote_nickName')
        };
        // game = new Game();
        binKeyEvent();
        var type = generateType();
        var dir = generateDir();
        game.init(doms,type,dir);
        socket.emit('init',{type:type,dir:dir});
        var t = generateType();
        var d = generateDir();
        game.showNext(t,d);
        socket.emit('next',{type:t,dir:d});
        timer = setInterval(move ,time);
    };
    //结束
    var stop = function () {
        if(timer){
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    };

    //作弊函数
    var isChangTiao = false;
    var getChangTiao = function () {
        isChangTiao = !isChangTiao;
    };
    //导出API
    // this.start = start;
    socket.on('start',function(){
        document.getElementById("waiting").innerHTML = '';
        // document.getElementById("waitingDiv").style.display = "none";
        // document.getElementById("controlBtn").className = "col-xs-12";
        start();
    });
    socket.on("lose",function(){
        game.gameOver(true);
        stop();
    });
    socket.on("leave",function(){
        document.getElementById("local_gameOver").innerHTML = "对方掉线";
        document.getElementById("remote_gameOver").innerHTML = "已掉线";
        stop();
    });

    socket.on("bottomLines",function(data){
        game.addTailLines(data);
        console.log("addTailLines");
        socket.emit("addTailLines",data);
    });


    this.control_fall1 =control_fall1; 
    this.control_fall2 =control_fall2;
    this.control_up=control_up;
    this.control_left=control_left;
    this.control_down=control_down;
    this.control_right=control_right;
    this.getChangTiao = getChangTiao;
};