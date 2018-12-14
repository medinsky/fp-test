import { numToArray } from "./multiply";
import { isSecondBigger, arrToNum, subtractByModule, takeMod } from "./subtract";

export const isDividentEqMoreDivider = (divident: string, divider: string): boolean => {
  const cr = compare(divident, divider);
  return cr === 1 || cr === 0;
}

export const compare = (a: string, b: string): number => {

  const aMoreB: number = 1;
  const aLessB: number = -1;

  if (a[0] === '-' && b[0] === '-') {
    const cr: number = compareByModule(a, b);
    return cr !== 0 ? cr * -1 : cr;
  } else if (a[0] !== '-' && b[0] !== '-') {
    return compareByModule(a, b);
  } else if (a[0] === '-') {
    return aLessB;
  } else if (b[0] === '-') {
    return aMoreB;
  }
}

export const compareByModule = (a: string, b: string): number => {
  const aByModule: string = takeMod(a);
  const bByModule: string = takeMod(b);
  const aLength: number = aByModule.length;
  const bLength: number = bByModule.length;
  const aEqB: number = 0;
  const aMoreB: number = 1;
  const aLessB: number = -1;

  if (aLength === bLength) {
    for (let i = 0; i < aLength; i++) {
      if (aByModule[i] === bByModule[i]) {
        if (i + 1 === aLength) {
          return aEqB;
        }
        continue;
      }
      return aByModule[i] < bByModule[i] ? aLessB : aMoreB;
    }
  }

  return aLength < bLength ? aLessB : aMoreB;
}

export const floorDevideBySubtract = (divident: string, divider: string): string => {
  if (divider === '0') {
    return divident === '0' ? NaN.toString() : Infinity.toString();
  } else if (divider === '1' || divident === '0') {
    return divident;
  }

  let counter: number = 1;
  //console.time('subtractByModule');
  let newDivident: string = subtractByModule(divident, divider);
  //console.timeEnd('subtractByModule');

  if (newDivident === '0') {
    return counter.toString();
  } else if (isNegative(newDivident)) {
    return '0';
  }

  let compareResult: boolean = isDividentEqMoreDivider(newDivident, divider);

  while (compareResult) {
    counter++;
    const oldDivident = newDivident;
    console.time(`subtractByModule2 ${oldDivident} - ${divider}`);
    newDivident = subtractByModule(newDivident, divider);
    console.timeEnd(`subtractByModule2 ${oldDivident} - ${divider}`);
    compareResult = isDividentEqMoreDivider(newDivident, divider);
  }

  return counter.toString();
}

export const isNegative = (number: string): boolean => compare(number, '0') === -1;

export const divide = (a: string, b: string): string => {
  const aArr: string[] = numToArray(a);
  const aLength: number = aArr.length;
  const resultStack: string[] = [];
  const dividentBuffer: string[] = [];

  for (let i: number = 0; i < aLength; i++) {
    dividentBuffer.push(aArr[i]);
    const divident: string = dividentBuffer.join('');
    if (isSecondBigger(b, divident)) {

      for (let j = 0; isSecondBigger(b, divident); j++) {
      }
      /*

      if (isSecondBigger(b, subtractByModule(divident, b))) {
        const result = Math.floor(+divident / +b);
        const backwardMultiply = result * +b;
        const difference = +divident - backwardMultiply;
        dividentBuffer.length = 0;
        dividentBuffer.push(difference.toString());
        resultStack.push(result);
      } else {
        dividentBuffer.length = 0;
      }*/
    }
  }

  console.log(`Divident: ${JSON.stringify(dividentBuffer)}`);

  console.log(`Result stack: ${JSON.stringify(resultStack)}`);

  if (dividentBuffer.length > 0 && dividentBuffer[0] !== '0') {
    console.log(`Остаток: ${dividentBuffer.join('')}`);
  } else {
    console.log(`RESULT: ${resultStack.join('')}`);
  }

  return '';
}
