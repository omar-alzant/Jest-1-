import analyzeArray from '../codes/analyzeArray'

describe('analyzeArray', () => {
    test.skip('test the average:', () => {
      expect(analyzeArray([1,8,3,4,2,6]).average).toEqual(4);
    });
    test('removes multiple values', () => {
      expect(analyzeArray([1,8,3,4,2,6]).min).toEqual(1);
    });
    test.skip('ignores non present values', () => {
      expect(analyzeArray([1,8,3,4,2,6]).max).toEqual(8);
    });
    test.skip('ignores non present values, but still works', () => {
      expect(analyzeArray([1,8,3,4,2,6]).length).toEqual(6);
    });
});