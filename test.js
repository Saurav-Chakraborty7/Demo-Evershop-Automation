// function convertTextToNumber(){
//     const text = "$713,666.78";  // Changed the format
//     const value = parseFloat(text.replace(/[$,]/g, ""));
//     return value;
// }
// console.log(convertTextToNumber()); // Output: 713666.78
// program to generate random strings

// declare all characters
const characters ='0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(1));