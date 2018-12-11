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
var squareOrMultiply = function (isOdd, n, result) { return isOdd ? result * n : Math.pow(result, 2); };
var powAsSpread = function (n, exp) { return exp === 0 ? 1 : spread(exp).reduceRight(function (result, item) { return squareOrMultiply(item, n, result); }, n); };
console.log(powAsSpread(2, 0));
