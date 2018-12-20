import {mod} from "./actions/mod";
import {divide} from "./actions/divide";
import {multiply} from "./actions/multiply";
import {pow} from "./actions/pow";

export const tapper = (x: string, y: string): string => {
  const modOfY: string = mod(y, '17');
  const powForTwo: string = multiply(multiply('17', x), modOfY);
  const twoInPowForTwo: string = pow('2', powForTwo);
  const denominator: string = multiply('17', twoInPowForTwo);
  const lastModFirstArg: string = divide(y, denominator);
  return mod(lastModFirstArg, '2');
};

export const halfCompareTapper = (x: string, y: string): boolean => 0.5 < parseInt(tapper(x, y));