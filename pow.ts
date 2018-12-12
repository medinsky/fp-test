import { multiply } from './multiply';
import { subtract } from './subtract';

const isOdd = (number: number | string): boolean => {
  const strNumber = typeof number === 'number' ? number.toString() : number;
  return +strNumber[strNumber.length - 1] % 2 === 1;
}

export const pow = (a: string, n: string) => {
  let result: string = '1';
  while (n !== '0') {
    if (isOdd(n)) {
      result = multiply(a, result);
      n = subtract(n, 1);
    } else {
      a = multiply(a, a);
      //n = devideEven(n);
    }
  }
  return result;
}

/*
function spread(n: number, result: boolean[] = []) {
  if (n === 1) {
    console.log(result.length);
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
}*/