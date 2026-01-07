const repeatString = function(str, num) {
    let arr = [];
    if (num >= 1) {
        for (i = 0; i < num; i++) {
            arr.push(str);
        }
    } else if (num === 0) {
        arr.pop();
    } else {
        return 'ERROR';
    } 
    return arr.join('');
};

// Do not edit below this line
module.exports = repeatString;
