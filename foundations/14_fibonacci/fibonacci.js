// Fibonacci Sequence (formula F(n) = F(n - 1) + F(n-2))
const fibonacci = function(nthMember) {

    // start a Fibonacci sequence array
    let fib = [1, 1];
    
    // convert nthMember to Integer
    nthMember = +nthMember;

    if (nthMember > 1) {
        for (let i = 2; i < nthMember; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[nthMember - 1];
    } else if (nthMember === 1) {
        return fib[nthMember];
    } else if (nthMember < 0) { // handling negative integers
        return 'OOPS';
    } else { // handling if zero is passed
        return 0;
    }
};

// Do not edit below this line
module.exports = fibonacci;
