function pow(a: number, n: number) {
  let res: number = 1;
  while (n !== 0) {
    if (isOdd(n)) {
      res = multiply(a, res);
      n = n - 1;
    } else {
      a = multiply(a, a);
      n = devideEven(n);
    }
  }
  return res;
}

function calc(a: number, n: number, result: number) {
  return isOdd(n)
    ? {
        res: multiply(a, result),
        n: n - 1
      }
    : {
        a: multiply(a, a),
        n: devideEven(n)
      };
}

function isOdd(n: number): boolean {
  return n % 2 === 1;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function devideEven(n: number): number {
  return n / 2;
}

console.log(pow(2, 3));
