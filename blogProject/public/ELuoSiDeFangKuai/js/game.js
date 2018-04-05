var Game = function () {

    //dom元素
    var gameDiv;
    var nextDiv;

    var timeDiv ;
    //分数变量
    var scoreDiv;

    var resultDiv;

    var headPhotoDiv;
    var nicknameDiv;
    var score = 0;
    //游戏矩阵
    var gameData = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    //当前方块
    var cur;
    //下一个方块
    var next;
    //divs
    var nextDivs = [];
    var gameDivs = [];
    //初始化Div
    var initDiv = function (container,data,divs) {

        // for(var i = 0; i< data.length;i++) {
        //     for (var j = 0; j < data[0].length; j++) {
        //         data[i][j] = 2;
        //     }
        // }
        for(var i = 0; i< data.length;i++){

            var div = [];
            for(var j = 0;j < data[0].length; j++){
                var newNode = document.createElement('div');

                newNode.className = 'none';
                var windowWidth = $(window).width();
                if(windowWidth < 640){
                    newNode.style.top = (i*10) + 'px';
                    newNode.style.left = (j*10) + 'px';
                }
                if(windowWidth >= 640){
                    newNode.style.top = (i*20) + 'px';
                    newNode.style.left = (j*20) + 'px';
                }

                container.appendChild(newNode);
                div.push(newNode);
            }
            divs.push(div);
        }
    };

    //刷新Div
    var reFreshDiv = function (data,divs) {
        for(var i=0;i < data.length; i++){
            for(var j=0;j < data[0].length; j++){
                if(data[i][j] === 0){
                    divs[i][j].className = 'none';
                }else if(data[i][j] === 1){
                    divs[i][j].className = 'done';
                }else if(data[i][j] === 2){
                    divs[i][j].className = 'current';
                }
            }
        }
    };

    //检查点是否合法
    var check = function (pos ,x , y) {
        if(pos.x + x <0 ){
            return false;
        }else if(pos.x + x >= gameData[0].length ){
            return false;
        }else if(pos.y + y < 0 ){
            return false;
        }else if(pos.y + y >= gameData.length ){
            return false;
        }else if(pos.x + x >= gameData.length ){
            return false;
        }else if(gameData[pos.y + y][pos.x + x] === 1 ){
            return false;
        }else{
            return true;
        }
    };

    //检测数据是否合法
    var isValid = function (pos, data) {
        for(var i = 0; i <data.length;i++ ) {
            for (var j = 0; j < data[0].length; j++) {
                if(data[i][j] !== 0){
                    if(! check(pos,j,i)){
                        return false;
                    }
                }
            }
        }
        return true;
    };

    //设置数据
    var setData = function () {
        for(var i = 0; i <cur.data.length;i++ ){
            for(var j = 0;j < cur.data[0].length;j++){
                if(check(cur.origin,j,i)) {
                    gameData[cur.origin.y + i][cur.origin.x + j] = cur.data[i][j];
                    // debugger;
                }
            }
        }
    };

    //清除数据
    var clearData = function () {
        for(var i = 0; i <cur.data.length;i++ ){
            for(var j = 0;j < cur.data[0].length;j++){
                if(check(cur.origin,j,i)){
                    gameData[cur.origin.y+ i][cur.origin.x + j] = 0;
                }

                // debugger;
            }
        }
    };

    //下移
    var down = function () {
        if( cur.canDown( isValid ) ){
            clearData();
            cur.down();
            setData();
            reFreshDiv(gameData,gameDivs);
            return true;
        }else{
            return false;
        }

    };

    //左移
    var left = function () {
        if( cur.canLeft( isValid ) ){
            clearData();
            cur.left();
            setData();
            reFreshDiv(gameData,gameDivs);
        }

    };

    //右移
    var right = function () {
        if( cur.canRight( isValid ) ){
            clearData();
            cur.right();
            setData();
            reFreshDiv(gameData,gameDivs);
        }

    };

    //旋转
    var rotate = function () {
        if( cur.canRotate( isValid ) ){
            clearData();
            cur.rotate();
            setData();
            reFreshDiv(gameData,gameDivs);
        }

    };
    //方块移动到底部固定
    var fixed = function () {
        for(var i = 0; i <cur.data.length;i++ ){
            for(var j = 0;j < cur.data[0].length;j++){
                if(check(cur.origin,j,i)){
                    if(gameData[cur.origin.y+ i][cur.origin.x + j] === 2){
                        gameData[cur.origin.y+ i][cur.origin.x + j] = 1;
                    }
                }
            }
        }
        reFreshDiv(gameData ,gameDivs );
    };
    //消行
    var checkClear = function () {
        var lineNum = 0;
        for (var i = gameData.length - 1;i >= 0 ;i -- ){
            var clear = true;
            for(var j = 0; j < gameData[0].length ; j++){
                if(gameData[i][j] !== 1){
                    clear =false;
                    break;
                }
            }
            if(clear){
                lineNum ++;
                for(var m = i; m> 0;m--){
                    for(var n = 0;n < gameData[0].length; n ++){
                        gameData[m][n] = gameData[m-1][n];
                    }
                }
                for(var n = 0;n < gameData[0].length; n ++){
                    gameData[0][n] = 0;
                }
                i ++;
            }
        }
        return lineNum;
    };
    //检查游戏结束
    var checkGameOver = function () {
        var  gameOver = false;
        for(var i = 0;i < gameData[0].length; i ++ ){
            if(gameData[1][i] ===1){
                gameOver = true;
            }
        }
        return gameOver;
    };
    //使用下一个方块
    var showNext = function (type , dir) {
        cur = next ;
        setData();
        next = SquareFactory.prototype.make(type , dir);
        reFreshDiv(gameData , gameDivs);
        reFreshDiv(next.data,nextDivs);
    };
    //设置时间
    var setTime = function (time) {
        timeDiv.innerHTML = time;
    };

    //设置分数
    var addScore = function (line) {
        var  s = 0;
        switch (line){
            case 1:
                s = 10;
                break;
            case 2:
                s = 30;
                break;
            case 3:
                s = 60;
                break;
            case 4:
                s = 100;
                break;
            default:
                break;
        }
        score += s;
        scoreDiv.innerHTML = score;

    };
    //游戏结束
    var gameOver = function(win){
        if(win){
            // resultDiv.innerHTML = "你赢了";
            // alert("你赢了");
            // return;
        }else{
            // resultDiv.innerHTML = "你输了";
            // alert("你输了");
            // return;
        }
    };

    //底部增加干扰行
    var addTailLines = function(lines){
        for(var i = 0; i<gameData.length - lines.length; i++){
            gameData[i] = gameData[i +lines.length];
        }
        for(var i=0; i<lines.length; i++){
            gameData[gameData.length - lines.length + i] = lines[i];
        }
        cur.origin.y -= lines.length;
        if(cur.origin.y < 0 ){
            cur.origin.y = 0;
        }
        reFreshDiv(gameData,gameDivs);
    };


    var showRemoteInfo = function (data) {
        console.log("data" + JSON.stringify(data));
        headPhotoDiv = document.getElementById('remote_headPhoto');
        nicknameDiv = document.getElementById('remote_nickName');
        headPhotoDiv.setAttribute('src',data.headUrl);
        nicknameDiv.innerHTML = data.nickname;

    };
    //初始化
    var init = function (doms,type,dir) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        timeDiv = doms.timeDiv;
        scoreDiv = doms.scoreDiv;
        resultDiv = doms.resultDiv;
        headPhotoDiv = doms.headPhoto;
        nicknameDiv = doms.nickname;
        // cur =  SquareFactory.prototype.make(type,dir);
        next = SquareFactory.prototype.make(type,dir);
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);

        // setData();
        // reFreshDiv(gameData,gameDivs);
        reFreshDiv(next.data,nextDivs);
    };

    //导出API
    this.init = init;
    this.down =down;
    this.left = left;
    this.right = right;
    this.rotate = rotate;
    this.fall = function () {
        while( down() ){

        }
    };
    this.fixed = fixed;
    this.showNext = showNext;
    this.checkClear = checkClear;
    this.checkGameOver = checkGameOver;
    this.setTime = setTime;
    this.addScore = addScore;
    this.gameOver = gameOver;
    this.addTailLines = addTailLines;
    this.showRemoteInfo = showRemoteInfo;
};