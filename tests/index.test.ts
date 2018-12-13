import { addByModule } from "../actions/add";
import { multiply } from "../actions/multiply";
import { subtractByModule } from "../actions/subtract";

it('should subtract values', () => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 1000; j >= 0; j--) {
      expect(subtractByModule(i.toString(), j.toString())).toBe((i - j).toString());
    }
  }
});

it('should add values', () => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 1000; j >= 0; j--) {
      expect(addByModule(i.toString(), j.toString())).toBe((i + j).toString());
    }
  }
});

it('should multiply values', () => {
  for (let i = 0; i < 1000; i++) {
    for (let j = 1000; j >= 0; j--) {
      expect(multiply(i.toString(), j.toString())).toBe((i * j).toString());
    }
  }
});