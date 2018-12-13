import { numToArray } from "./multiply";
import { isSecondBigger, arrToNum, subtractByModule } from "./subtract";

const isDividentMoreDivider = (divident: string, divider: string): boolean => isSecondBigger(divider, divident);

export const floorDevideBySubstract = (divident: string, divider: string): string => {
  let counter: number = 0;
  let newDivident: string = subtractByModule(divident, divider);
  let compareResult: boolean = isDividentMoreDivider(newDivident, divider);
  while (compareResult) {
    counter++;
    newDivident = subtractByModule(newDivident, divider);
    compareResult = isDividentMoreDivider(newDivident, divider);
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
