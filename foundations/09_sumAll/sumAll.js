const sumAll = function(start, end) {

    // make a variable to add all values between start and end
    let sum = 0;

    // check if both arguments are integers
    if (Number.isInteger(start) && Number.isInteger(end)) {
        // check if arguments are non-negative numbers
        if (start > 0 && end > 0) {
            // check if larger number is first or second argument
            if (start < end) {
                // get each value between start and end and add them together
                for (let i = start; i <= end; i++) {
                    sum += i;
                }
            } else {
                for (let i = end; i <= start; i++) {
                    sum += i;
                }
            }
        } else {
            return 'ERROR';
        }
    } else {
        return 'ERROR';
    }
    return sum;
};

sumAll(2.5, 4);

// Do not edit below this line
module.exports = sumAll;
