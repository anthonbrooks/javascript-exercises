const getTheTitles = function(bookList) {

    let bookTitles = [];

    // loop through array to get each book
    for (let book in bookList) {

        bookTitles.push(bookList[book].title);
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
