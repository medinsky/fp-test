var isOdd = function (n) { return n % 2 === 1; };
var multiply = function (a, b) { return a * b; };
var devideEven = function (n) { return n / 2; };
var square = function (n) { return multiply(n, n); };
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
var iterations = 0;
function pow(a, n) {
    var result = 1;
    while (n !== 0) {
        iterations++;
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
        console.log(result);
        return result;
    }
    else if (isOdd(n)) {
        return spread(n - 1, result);
    }
    else {
        result.push([2]);
        return spread(devideEven(n), result);
    }
}
var arrPow = function (n, exp) { return isMultiplierExists(exp) ? (Math.pow(n, exp[0])) * n : Math.pow(n, exp[0]); };
var isMultiplierExists = function (exp) { console.log(exp.length > 1); return exp.length > 1; };
var powAsSpread = function (n, exp) { return spread(exp).reduceRight(function (result, item) {
    console.log("result: " + result);
    console.log("item: " + item);
    var powed = arrPow(result, item);
    console.log("powed: " + powed);
    return powed;
}, n); };
console.log(powAsSpread(2, 9));
