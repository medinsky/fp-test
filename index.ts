const isOdd = (n: number): boolean => n % 2 === 1;

const multiply = (a: number, b: number): number => a * b;

const devideEven = (n: number): number => n / 2;

const calc = (a: number, n: number, result: number) =>
  isOdd(n)
    ? {
      result: multiply(a, result),
      n: n - 1
    }
    : {
      a: multiply(a, a),
      n: devideEven(n)
    };

function pow(a: number, n: number) {
  let result: number = 1;
  while (n !== 0) {
    if (isOdd(n)) {
      result = multiply(a, result);
      n = n - 1;
    } else {
      a = multiply(a, a);
      n = devideEven(n);
    }
  }
  return result;
}

console.log(pow(2, 3));
