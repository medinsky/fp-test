import { numToArray } from "./multiply";
import { isSecondBigger, arrToNum, subtractByModule } from "./subtract";

const isDividentMoreDivider = (divident: string, divider: string): boolean => isSecondBigger(divider, divident);

export const floorDevideBySubstract = (divident: string, divider: string): string => {
  let counter = 0;
  let newDivident = subtractByModule(divident, divider);
  let compareResult = isDividentMoreDivider(newDivident, divider);
  while (compareResult) {
    counter++;
    console.table([newDivident, divider]);
    newDivident = subtractByModule(newDivident, divider);
    console.log(newDivident);
    compareResult = isDividentMoreDivider(newDivident, divider);
    console.log(compareResult);  
  }
  return counter.toString();
}

export const divide = (a: string, b: string): string => {
  const aArr = numToArray(a);
  const aLength = aArr.length;
  const resultStack = [];
  const dividentBuffer = [];

  for (let i = 0; i < aLength; i++) {
    console.log(dividentBuffer);
    dividentBuffer.push(aArr[i]);
    const divident = dividentBuffer.join('');
    if (isSecondBigger(b, divident)) {

      for (let j = 0; isSecondBigger(b, divident); j++) {
        floorDevideBySubstract
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
