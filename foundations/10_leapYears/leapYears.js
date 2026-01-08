const leapYears = function(year) {
    // check if year is divisible by four
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
