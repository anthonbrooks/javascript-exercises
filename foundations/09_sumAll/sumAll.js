const sumAll = function(start, end) {

    // make a variable to add all values between start and end
    let sum = 0;

    // get each value between start and end and add them together
    for (let i = start; i <= end; i++) {
        console.log(i);
        sum += i;
    }
    return sum;
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
