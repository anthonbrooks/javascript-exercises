const palindromes = function (str) {
    revStr = str.split('').reverse().join('');
    if (str === revStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
