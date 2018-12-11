var isOdd = function (n) { return n % 2 === 1; };
var multiply = function (a, b) { return a * b; };
var devideEven = function (n) { return n / 2; };
var square = function (n) { return multiply(n, n); };
var squareOrMultiply = function (isOdd, n, result) { return isOdd ? result * n : Math.pow(result, 2); };
var powAsSpread = function (n, exp) { return exp === 0 ? 1 : spread(exp).reduceRight(function (result, item) { return squareOrMultiply(item, n, result); }, n); };
var calc = function (a, n, result) {
    return isOdd(n)
        ? {
            result: multiply(a, result),
            n: n - 1
        }
        : {
            a: multiply(a, a),
            n: devideEven(n)
        };
};
function pow(a, n) {
    var result = 1;
    while (n !== 0) {
        if (isOdd(n)) {
            result = multiply(a, result);
            n = n - 1;
        }
        else {
            a = multiply(a, a);
            n = devideEven(n);
        }
    }
    return result;
}
function spread(n, result) {
    if (result === void 0) { result = []; }
    if (n === 1) {
        return result;
    }
    else if (isOdd(n)) {
        result.push(true);
        return spread(n - 1, result);
    }
    else {
        result.push(false);
        return spread(devideEven(n), result);
    }
}
function exp(a, n) {
    if (n === 0) {
        return 1;
    }
    else if (n === 1) {
        return a;
    }
    else if (isOdd(n)) {
        return a * exp(multiply(a, a), devideEven(n - 1));
    }
    else {
        return exp(multiply(a, a), devideEven(n));
    }
}
var t0 = new Date().getMilliseconds();
for (var i = 0; i < 100000; i++) {
    powAsSpread(2, 103);
}
console.log(powAsSpread(2, 103));
var t1 = new Date().getMilliseconds();
console.log("MY FUNC: " + (t1 - t0));
var t2 = new Date().getMilliseconds();
for (var i = 0; i < 100000; i++) {
    Math.pow(2, 103);
}
console.log(Math.pow(2, 103));
var t3 = new Date().getMilliseconds();
console.log("JS FUNC: " + (t3 - t2));
var t4 = new Date().getMilliseconds();
for (var i = 0; i < 100000; i++) {
    pow(2, 103);
}
console.log(pow(2, 103));
var t5 = new Date().getMilliseconds();
console.log("MY2 FUNC: " + (t5 - t4));
var t6 = new Date().getMilliseconds();
for (var i = 0; i < 100000; i++) {
    exp(2, 103);
}
console.log(exp(2, 103));
var t7 = new Date().getMilliseconds();
console.log("MY3 FUNC: " + (t7 - t6));
