// Square1 ‘一’型 
var Square1 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];
};
Square1.prototype=Square.prototype;


// Square2 ‘土’型
var Square2 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]
    ];
};
Square2.prototype=Square.prototype;


// Square3 ‘反7’型
var Square3 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [2,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [2,2,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,0,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ]
    ];
};
Square3.prototype=Square.prototype;

// Square4 ‘7’型
var Square4 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [2,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,0,0,0],
            [2,2,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,2,0],
            [2,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];
};
Square4.prototype=Square.prototype;

// Square5 ‘田’型
var Square5 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];
};
Square5.prototype=Square.prototype;


// Square6 ‘反2’型
var Square6 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]
    ];
};
Square6.prototype=Square.prototype;


// Square7 ‘2’型
var Square7 = function () {
    //代码引用
    Square.call(this);

    //旋转数组
    this.rotates = [
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ],
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0]
        ]
    ];
};
Square7.prototype=Square.prototype;

var SquareFactory = function () {}
    SquareFactory.prototype.make = function ( index ,dir ) {
        var s;
        index ++;
        switch (index){
            case 1:
                s= new Square1();
                break;
            case 2:
                s= new Square2();
                break;
            case 3:
                s= new Square3();
                break;
            case 4:
                s= new Square4();
                break;
            case 5:
                s= new Square5();
                break;
            case 6:
                s= new Square6();
                break;
            case 7:
                s= new Square7();
                break;
            default:
                break;
        }
        s.origin.y = 0;
        s.origin.x = 3;
        s.rotate();
        return s;
    };

