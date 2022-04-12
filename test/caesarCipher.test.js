// http://practicalcryptography.com/ciphers/caesar-cipher/
// plain:  abcdefghijklmnopqrstuvwxyz
// cipher: bcdefghijklmnopqrstuvwxyza

import caeserCipher from "../codes/caesarCipher"


test('return the string with shift value : ',()=>{
    expect(caeserCipher('abcdefg',20)).toBe('uvwxyz{')
})