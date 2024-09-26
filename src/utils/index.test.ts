import { addCommasToNumber } from './index';

describe('addCommasToNumber', () => {
  it('should add commas to a number', () => {
    expect(addCommasToNumber(1234567)).toEqual('1,234,567');
  });

  it('should handle zero', () => {
    expect(addCommasToNumber(0)).toEqual('0');
  });

  it('should handle negative numbers', () => {
    expect(addCommasToNumber(-1234567)).toEqual('-1,234,567');
  });
});
