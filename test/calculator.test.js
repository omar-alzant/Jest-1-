import calc from '../codes/calculator'

test('1 + 2 :',()=>{
    expect(calc('+',1,2)).toBe(3);
})

test('1 * 2 :',()=>{
    expect(calc('*',1,2)).toBe(2);
})

test('1 / 2 :',()=>{
    expect(calc('/',1,2)).toBe(0.5);
})

test('1 - 2 :',()=>{
    expect(calc('-',1,2)).toBe(-1);
})