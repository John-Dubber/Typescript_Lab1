let word: string = "test 1";
let indicator: boolean = true;
console.log(wordCount1(word));
console.log(wordCount2(word));
console.log(wordCount3(word, indicator));

function wordCount1(word):number {
    return word.length;
}
function wordCount2(word):number {
    return word.replace(" ","").length;
}
function wordCount3(word, indicator):number{
    if (indicator == true)
    {
        return(word.length);
    }
    else
    {
        return word.replace(" ","").length;
    }
}
