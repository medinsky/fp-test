"use strict";
exports.__esModule = true;
var isOdd = function (number) {
    var strNumber = typeof number === 'number' ? number.toString() : number;
    return +strNumber[strNumber.length - 1] % 2 === 1;
};
exports.multiply = function (a, b) {
    if (a.toString() === '0' || b.toString() === '0') {
        return '0';
    }
    var aArr = numToReversedArr(a);
    var bArr = numToReversedArr(b);
    var stack = multiplyArrays(aArr, bArr);
    return shiftStack(stack).reverse().join('');
};
var numToReversedArr = function (number) { return numToArray(number).reverse(); };
var numToArray = function (number) { return (typeof number === 'number' ? number.toString() : number).split(''); };
var multiplyArrays = function (aArr, bArr) {
    var stack = [];
    aArr.forEach(function (aNumber, i) {
        bArr.forEach(function (bNumber, j) {
            var m = +aNumber * +bNumber;
            stack[i + j] = stack[i + j]
                ? stack[i + j] + m
                : m;
        });
    });
    return stack;
};
var shiftStack = function (stack) {
    var resultStack = stack.slice();
    for (var i = 0; i < resultStack.length; i++) {
        var units = resultStack[i] % 10;
        var tens = Math.floor(resultStack[i] / 10);
        resultStack[i] = units;
        if (resultStack[i + 1]) {
            resultStack[i + 1] += tens;
        }
        else if (tens !== 0) {
            resultStack[i + 1] = tens;
        }
    }
    return resultStack;
};
