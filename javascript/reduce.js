[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25