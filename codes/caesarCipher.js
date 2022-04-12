// http://practicalcryptography.com/ciphers/caesar-cipher/

// plain:  abcdefghijklmnopqrstuvwxyz
// cipher: bcdefghijklmnopqrstuvwxyza

const caeserCipher = (s,shift)=>{
    if(shift === 0) return s;
    
    return  s.replace(/[a-z]/g, (c)=>
            String.fromCharCode(c.charCodeAt(0) + shift));
}

module.exports = caeserCipher;
// console.log(caeserCipher('abcdefg',20));