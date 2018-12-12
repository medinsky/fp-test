export const subtract = (a: string | number, b: string | number): string => {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a - b).toString();
  } else if (+a !== Infinity && +b !== Infinity) {
    return (+a - +b).toString();
  } else {
    return subtractStrings(a.toString(), b.toString());
  }
}

const subtractStrings = (a: string, b: string): string => {
  return '';
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