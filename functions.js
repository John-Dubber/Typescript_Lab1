var word = "test 1";
var indicator = true;
console.log(wordCount1(word));
console.log(wordCount2(word));
console.log(wordCount3(word, indicator));
function wordCount1(word) {
    return word.length;
}
function wordCount2(word) {
    return word.replace(" ", "").length;
}
function wordCount3(word, indicator) {
    if (indicator == true) {
        return (word.length);
    }
    else {
        return word.replace(" ", "").length;
    }
}
