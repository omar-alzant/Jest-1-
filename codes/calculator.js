function calc(type,a,b){
    switch(type){
        case '+' : return a+b;
        case '*' : return a*b;
        case '/' : return a/b;
        case '-' : return a-b; 
    }
}

module.exports = calc;
// console.log(calc('+',4,5))