import { swapModDesc, arrToNum, trimZeros } from "./subtract";
import { numToReversedArr } from "./multiply";

export const addByModule = (a: string, b: string): string => {
  const { a: first, b: second } = swapModDesc(a, b);
  const firstRArr = numToReversedArr(first);
  const secondRArr = numToReversedArr(second);
  const resultRArr: string[] = ['0'];

  for (let i = 0; i < firstRArr.length; i++) {
    const sum = +laydownCol(firstRArr[i], secondRArr[i]);
    const units = sum % 10;
    const tens = Math.floor(sum / 10);

    resultRArr[i] = (+resultRArr[i] + units).toString();
    resultRArr[i + 1] = tens.toString();
  }

  const resultArr = [...resultRArr].reverse();

  const number = arrToNum(trimZeros(resultArr));

  return number;
}

const laydownCol = (first: string, second: string): string => {
  return typeof second === 'undefined'
    ? first
    : (+first + +second).toString();
}