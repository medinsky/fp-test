import { floorDevideBySubtract, compare, isDividentEqMoreDivider } from "../actions/divide";
import { divElements } from "../actions/divide";

it('should check if is divident >= divider', () => {
  for (let i = -100; i < 100; i++) {
    for (let j = 100; j >= -100; j--) {
      expect(isDividentEqMoreDivider(i.toString(), j.toString())).toBe(i >= j);
    }
  }
});

it('should floor divide by subtract divident on divider', () => {
  for (let i = 1; i < 100; i++) {
    for (let j = 100; j >= 1; j--) {
      expect(divElements(i.toString(), j.toString())).toBe(Math.floor(i / j).toString());
    }
  }
});