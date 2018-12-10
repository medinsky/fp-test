function pow(a, n) {
    var res = 1;
    while (n !== 0) {
        if (isOdd(n)) {
            res = multiply(a, res);
            n = n - 1;
        }
        else {
            a = multiply(a, a);
            n = devideEven(n);
        }
    }
    return res;
}
function isOdd(n) {
    return n % 2 === 1;
}
function multiply(a, b) {
    return a * b;
}
function devideEven(n) {
    return n / 2;
}
console.log(pow(2, 3));
