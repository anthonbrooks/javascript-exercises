// Fibonacci Sequence (formula F(n) = F(n - 1) + F(n-2))
const fibonacci = function(nthMember) {
    // fibSeq = [0, 1, 1, 2, 3, 5, 8];
    // return fibSeq[nthMember];

    let fib = [1, 1];

    for (let i = 2; i < nthMember; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[nthMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
