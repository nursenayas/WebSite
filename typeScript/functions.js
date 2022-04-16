var getAvarage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; (i = a.length); i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result : " + result;
};
getAvarage(10, 20, 30);
getAvarage(10, 20, 50, 40);
getAvarage(10, 20);
