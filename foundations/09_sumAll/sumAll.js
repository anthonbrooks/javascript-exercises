// make an empty array to hold all values between start and end


const sumAll = function(start, end) {

    let sum = 0;

    for (let i = start; i <= end; i++) {
        console.log(i);
        sum += i;
    }
    return sum;
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
