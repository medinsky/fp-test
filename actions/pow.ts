import { divElements } from './divideStream';
import { subtractByModule } from './subtract';
import { multiply } from './multiply';

const isOdd = (number: string): boolean => {
  return +number[number.length - 1] % 2 === 1;
}

const powMemoized = () => {
  const cache = {};

  return (a: string, n: string) => {
    const hash = `${a}^${n}`;

    if (hash in cache) {
      //console.log('Fetching from cache');
      return cache[hash];
    } else {
      //console.log('Calculating result');
      //console.log(`params: ${hash}`);
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

      cache[hash] = result;
      return result;
    }
  }
}

export const pow = powMemoized();

export const oldpow = (a: string, n: string) => {
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