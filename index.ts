const isOdd = (n: number): boolean => n % 2 === 1;

const multiply = (a: number, b: number): number => a * b;

const devideEven = (n: number): number => n / 2;

const square = (n: number): number => multiply(n, n);

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

let iterations = 0;

function pow(a: number, n: number) {
  let result: number = 1;
  while (n !== 0) {
    iterations++;
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

function spread(n: number, result: number[][] = []) {
  if (n === 1) {
    console.log(result);
    return result;
  } else if (isOdd(n)) {
    return spread(n - 1, result);
  } else {
    result.push([2]);
    return spread(devideEven(n), result);
  }
}

const arrPow = (n: number, exp: number[]) => isMultiplierExists(exp) ? (n ** exp[0]) * n : n ** exp[0];

const isMultiplierExists = (exp: number[]) => { console.log(exp.length > 1); return exp.length > 1 };

const powAsSpread = (n: number, exp: number) => spread(exp).reduceRight((result, item) => {
  console.log(`result: ${result}`);
  console.log(`item: ${item}`);
  const powed = arrPow(result, item);
  console.log(`powed: ${powed}`);
  return powed;
}, n);

console.log(powAsSpread(2, 4));