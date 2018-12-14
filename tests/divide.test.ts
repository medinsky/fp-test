import { isDividentEqMoreDivider } from "../actions/divide";

it('should check if is divident >= divider', () => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 1000; j >= 0; j--) {
      expect(isDividentEqMoreDivider(i.toString(), j.toString())).toBe(i >= j);
    }
  }
});