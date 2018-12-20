import {mod} from "./actions/mod";
import {divide} from "./actions/divide";
import {multiply} from "./actions/multiply";
import {pow} from "./actions/pow";
import {addByModule} from "./actions/add";

export const tapper = (x: string, y: string): string => {
  return mod(multiply(divide(y, '17'), divide('1', pow('2', addByModule(multiply('17', x), mod(y, '17'))))), '2');
};

export const halfCompareTapper = (x: string, y: string) => 0.5 >= parseInt(tapper(x, y));