var isOdd = function (n) { return n % 2 === 1; };
var multiply = function (a, b) { return a * b; };
var devideEven = function (n) { return n / 2; };
function pow(a, n) {
    console.log(new Array(n));
    var result = [1, 2, 3].reduce(function (result, item, index) {
        console.log("a: " + index);
        console.log("result: " + result);
        return multiply(result, a);
    }, 1);
    console.log(result);
}
function calc(a, n, result) {
    return isOdd(n)
        ? {
            result: multiply(a, result),
            n: n - 1
        }
        : {
            a: multiply(a, a),
            n: devideEven(n)
        };
}
console.log(pow(2, 3));
