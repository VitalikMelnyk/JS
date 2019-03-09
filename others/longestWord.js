// function longest(sentence) {
//     var newStr = sentence.split(" ");
//     var wordLength = newStr.map(function (item) {
//         return item.length;
//     });

//     return Math.max(...wordLength);
// }
function longest(sentence) {
    const newStr = sentence.split(" ");
    let max = 0;

    for(let i = 0; i < newStr.length; i++) {
        let word = newStr[i];
        if(word.length > max) {
            max = word.length;
        }   
    }
    return max;
} 

var str = "London is the capital of Great Britain";

console.log(longest(str));