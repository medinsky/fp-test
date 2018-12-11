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

function exp(a, n) {
  if (n === 0) {
      return 1;
  } else if (n === 1) {
      return a;
  } else if (isOdd(n)) {
      return a * exp(multiply(a, a), devideEven(n - 1))
  } else {
      return exp(multiply(a, a), devideEven(n));
  }
}

const t0 = new Date().getMilliseconds();
for (let i = 0; i < 100000; i++) {
  powAsSpread(2, 103);
}
console.log(powAsSpread(2, 103));
const t1 = new Date().getMilliseconds();
console.log(`MY FUNC: ${t1 - t0}`);


const t2 = new Date().getMilliseconds();
for (let i = 0; i < 100000; i++) {
  Math.pow(2, 103);
}
console.log(Math.pow(2, 103));
const t3 = new Date().getMilliseconds();
console.log(`JS FUNC: ${t3 - t2}`);


const t4 = new Date().getMilliseconds();
for (let i = 0; i < 100000; i++) {
  pow(2, 103);
}
console.log(pow(2, 103));
const t5 = new Date().getMilliseconds();
console.log(`MY2 FUNC: ${t5 - t4}`);


const t6 = new Date().getMilliseconds();
for (let i = 0; i < 100000; i++) {
  exp(2, 103);
}
console.log(exp(2, 103));
const t7 = new Date().getMilliseconds();
console.log(`MY3 FUNC: ${t7 - t6}`);