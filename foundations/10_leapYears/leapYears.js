const leapYears = function(year) {
    // check if year is divisible by four and four-hundred
    if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
