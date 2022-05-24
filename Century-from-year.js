function century(year) {
    let yearFirstLetter = Number(year.toString().slice(0,2))
    // return year%100 == 0?  yearFirstLetter :  yearFirstLetter+1;
    console.log(year%100 == 0?  yearFirstLetter :  yearFirstLetter+1);
}

// century(1901);

// century(100);

// century(2022);