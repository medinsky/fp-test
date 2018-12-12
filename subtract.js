"use strict";
exports.__esModule = true;
exports.subtract = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a - b).toString();
    }
    else if (+a !== Infinity && +b !== Infinity) {
        return (+a - +b).toString();
    }
    else {
        return subtractStrings(a.toString(), b.toString());
    }
};
var subtractStrings = function (a, b) {
    return '';
};
var isSecondBigger = function (a, b) {
    var aLength = a.length;
    var bLength = b.length;
    if (aLength === bLength) {
        for (var i = 0; i < aLength; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return b[i] > a[i];
        }
    }
    return bLength > aLength;
};
var swapDesc = function (firstValue, secondValue) {
    return isSecondBigger(firstValue, secondValue)
        ? {
            a: secondValue,
            b: firstValue
        } : {
        a: firstValue,
        b: secondValue
    };
};
