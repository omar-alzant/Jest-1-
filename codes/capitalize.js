// A capitalize function that takes a string and returns it with the first character capitalized.

  function capitalize(s){
    let lower = s.toLowerCase()
    let first = s.charAt(0).toUpperCase();

             return first+lower.slice(1);
}

module.exports = capitalize;
// console.log(capitalize('sddAAAsa'));