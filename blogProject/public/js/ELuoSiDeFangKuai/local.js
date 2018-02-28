var Local = function () {
    //游戏对象
    var game;
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
          }else if(e.keyCode ===39){//right
              game.right();
          }else if(e.keyCode ===40){//dwon
              game.down();
          }else if(e.keyCode ===37){//left
              game.left();
          }else if(e.keyCode ===32){//space
              game.fall();
          }
      }
    };
    //移动
    var move = function () {
        timeFunc();
        if(!game.down()){
            game.fixed();
            var lineNum = game.checkClear();
            if(lineNum){
                game.addScore(lineNum);
            }
            var gameOver = game.checkGameOver();
            if(gameOver){

            }else{
                game.showNext(generateType(),generateDir());
            }

        }
    };

    //计时函数
    var timeFunc = function () {
        timeCouter ++;
        if(timeCouter === 5){
            tim ++;
            timeCouter = timeCouter % 5;
            game.setTime(tim);
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
            gameDiv : document.getElementById('game'),
            nextDiv : document.getElementById('next'),
            timeDiv : document.getElementById('time'),
            scoreDiv:document.getElementById('score')
        };
        game = new Game();
        game.init(doms,generateType(),generateDir());
        binKeyEvent();
        game.showNext(generateType(),generateDir());
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
    //导出API
    this.start = start;

};