// Fibonacci Sequence (formula F(n) = F(n - 1) + F(n-2))
const fibonacci = function(nthMember) {

    // start a Fibonacci sequence array
    let fib = [1, 1];

    if (nthMember > 1) {
        for (let i = 2; i < nthMember; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[nthMember - 1];
    } else if (nthMember === 1) {
        return fib[nthMember];
    } else if (nthMember < 0) {
        return 'OOPS';
    } else {
        return 0;
    }
};

// Do not edit below this line
module.exports = fibonacci;
