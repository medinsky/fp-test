const isOdd = (n: number): boolean => n % 2 === 1;

const multiply = (a: number, b: number): number => a * b;

const devideEven = (n: number): number => n / 2;

const square = (n: number): number => multiply(n, n);

const squareOrMultiply = (isOdd: boolean, n: number, result: number) => isOdd ? result * n : result ** 2;

const powAsSpread = (n: number, exp: number) => exp === 0 ? 1 : spread(exp).reduceRight((result, item) => squareOrMultiply(item, n, result), n);

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

function spread(n: number, result: boolean[] = []) {
  if (n === 1) {
    return result;
  } else if (isOdd(n)) {
    result.push(true);
    return spread(n - 1, result);
  } else {
    result.push(false);
    return spread(devideEven(n), result);
  }
}


console.log(powAsSpread(2, 0));