//1
// function abbrevName(name){
//     let text = name.split(' ');
//     let i1 = text[0].charAt(0);
//     let i2 = text[1].charAt(0);
//     let result = i1 + '.' + i2;
//     return result;
// }

//2

function abbrevName(fullname){
    let nameSplit = fullname.split(' ');
    let [name, surname] = nameSplit;
    // return `${name} + ${surname}`
    console.log(`${name[0]}. ${surname[0]}`)
}

  
abbrevName('Maria Volkova');