// A reverseString function that takes a string and returns it reversed.

function reverseString(s){
    let arrs = s.split('').reverse();
    
    // console.log(arrs.join(''));
    return arrs.join('');
}

    export default reverseString;
// reverseString('ad adki koifd')