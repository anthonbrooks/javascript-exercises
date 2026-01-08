const removeFromArray = function(arr, ...num) {
    let newArr = [... new Set(arr)];
    console.log(newArr);
    for (const n of num) {
        if (newArr.includes(n)) {
            ind = newArr.indexOf(n);
            newArr.splice(ind, 1);
        }
    } 
    return newArr;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
