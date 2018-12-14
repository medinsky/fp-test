import { numToArray } from "./multiply";
import { isSecondBigger, arrToNum, subtractByModule } from "./subtract";

export const isDividentEqMoreDivider = (divident: string, divider: string): boolean => {
  const aLength: number = divident.length;
  const bLength: number = divider.length;

  const paramsEqual = true;

  if (aLength === bLength) {
    for (let i = 0; i < aLength; i++) {
      if (divident[i] === divider[i]) {
        if (i + 1 === aLength) {
          return paramsEqual;
        }
        continue;
      }
      return divident[i] > divider[i];
    }
  }

  return bLength > aLength;
}

export const floorDevideBySubstract = (divident: string, divider: string): string => {
  if (divider === '0') {
    return Infinity.toString();
  } else if (divider === '1') {
    return divident;
  }

  let counter: number = 1;
  let newDivident: string = subtractByModule(divident, divider);
  console.log(newDivident);
  let compareResult: boolean = isDividentEqMoreDivider(newDivident, divider);
  console.log([newDivident, divider]);
  console.log(compareResult);
  
  while (compareResult) {
    counter++;
    newDivident = subtractByModule(newDivident, divider);
    console.log(newDivident);
    compareResult = isDividentEqMoreDivider(newDivident, divider);
  }

  return counter.toString();
}

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
