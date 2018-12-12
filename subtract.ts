import { numToReversedArr } from "./multiply";

export const subtract = (a: string, b: string): string => {
  const { a: first, b: second } = swapDesc(a, b);
  const swapHappened = first === b;
  const firstRArr = numToReversedArr(first);
  const secondRArr = numToReversedArr(second);

  const resultRArr: string[] = [];
  for (let i = 0; i < firstRArr.length; i++) {
    if (firstRArr[i] < secondRArr[i]) {
      firstRArr[i + 1] = (+firstRArr[i + 1] - 1).toString();
      firstRArr[i] = (+firstRArr[i] + 10).toString();
    }
    const sum = laydownCol(firstRArr[i], secondRArr[i]);
    resultRArr.push(sum);
  }

  const result = resultRArr.reverse().join('');
  const sign = swapHappened && result !== '0' ? '-' : '';

  return `${sign}${result}`;
}

const laydownCol = (first: string, second: string): string => {
  return typeof second === 'undefined'
    ? first
    : (+first - +second).toString();
}

const isSecondBigger = (a: string, b: string): boolean => {
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

interface SwapDesc {
  a: string,
  b: string
}

const swapDesc = (firstValue: string, secondValue: string): SwapDesc => {
  return isSecondBigger(firstValue, secondValue)
    ? {
      a: secondValue,
      b: firstValue
    } : {
      a: firstValue,
      b: secondValue
    }
}