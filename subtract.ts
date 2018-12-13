import { numToReversedArr } from "./multiply";

export const subtractByModule = (a: string, b: string): string => {
  const { a: first, b: second } = swapModDesc(a, b);
  const swapHappened = first === b;
  const firstRArr = numToReversedArr(first);
  const secondRArr = numToReversedArr(second);

  const resultRArr: string[] = [];
  for (let i = 0; i < firstRArr.length; i++) {
    if (firstRArr[i] < secondRArr[i]) {
      let j = i + 1;
      while (firstRArr[j] === '0') {
        j++;
      }
      for (let k = i + 1; k <= j; k++) {
        if (firstRArr[k] === '0') {
          firstRArr[k] = '9';
        } else {
          firstRArr[k] = (+firstRArr[k] - 1).toString();
        }
      }
      firstRArr[i] = (+firstRArr[i] + 10).toString();
    }
    const sum = laydownCol(firstRArr[i], secondRArr[i]);
    resultRArr.push(sum);
  }

  const resultArr = [...resultRArr].reverse();

  const number = arrToNum(trimZeros(resultArr));

  const sign = swapHappened && number !== '0' ? '-' : '';

  return `${sign}${number}`;
}

export const arrToNum = (numberArr: string[]): string => numberArr.join('');

export const trimZeros = (numberArr: string[]): string[] => {
  const firstNotZeroIdx = firstNotZeroIndex(numberArr);
  return typeof firstNotZeroIdx === 'undefined'
    ? ['0']
    : numberArr.slice(firstNotZeroIdx);
}

const firstNotZeroIndex = (numberArr: string[]): number => {
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] !== '0') {
      return i;
    }
  }
}

const laydownCol = (first: string, second: string): string => {
  return typeof second === 'undefined'
    ? first
    : (+first - +second).toString();
}

export const isSecondBigger = (a: string, b: string): boolean => {
  const aLength: number = a.length;
  const bLength: number = b.length;

  if (aLength === bLength) {
    for (let i = 0; i < aLength; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return b[i] > a[i];
    }
  }

  return bLength > aLength;
};

interface SwapModuloDesc {
  a: string,
  b: string
}

export const swapModDesc = (first: string, second: string): SwapModuloDesc => {
  const modFirst = takeMod(first);
  const modSecond = takeMod(second);
  return isSecondBigger(modFirst, modSecond)
    ? {
      a: modSecond,
      b: modFirst
    } : {
      a: modFirst,
      b: modSecond
    }
}

export const takeMod = (number: string): string => number.replace('-', '');