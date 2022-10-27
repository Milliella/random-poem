// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}

let openingLine = "on a dark winter's night"
let pronouns = ["i", "we", "they", "he", "she"]
let verbs = ["conjoured", "ate", "slept", "walked"]
let adverbs = ["slowly", "quickly", "wildly", "quietly", "loudly"]

let pronoun = randomElementFromArray(pronouns)
let verb = randomElementFromArray(verbs)
let adverb = randomElementFromArray(adverbs)


console.log(pronoun)
console.log(verb)
console.log(adverb)
let poem = openingLine + " "+ pronoun + " " + verb + " " + adverb

let longPoem = ""

for(let i = 0; i < 10; i++){
    let pronoun = randomElementFromArray(pronouns)
    let verb = randomElementFromArray(verbs)
    let adverb = randomElementFromArray(adverbs)
    longPoem += openingLine + " " + pronoun + " " + verb + " " + adverb
    longPoem += "<br>"
}

console.log(longPoem)
document.getElementById("para").innerHTML = longPoem                                                                                                                                                                                                                                                        