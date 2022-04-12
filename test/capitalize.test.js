import capitalize from '../codes/capitalize';

test('return upper-case the first capital',()=>{
    expect(capitalize('omAr')).toBe('Omar');
});