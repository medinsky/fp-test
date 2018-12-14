import { divElements } from './actions/divideStream';
import { subtractByModule } from './actions/subtract';
import { multiply } from './actions/multiply';

const isOdd = (number: string): boolean => {
  return +number[number.length - 1] % 2 === 1;
}

export const pow = (a: string, n: string) => {
  let result: string = '1';
  while (n !== '0') {
    if (isOdd(n)) {
      result = multiply(a, result);
      n = subtractByModule(n, '1');
    } else {
      a = multiply(a, a);
      n = divElements(n, '2');
    }
  }
  return result;
}