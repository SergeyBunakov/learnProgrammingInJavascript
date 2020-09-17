// let text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
let text = "you should never shout when typing";
// let presentableText = text.toLowerCase();
let presentableText = text.toUpperCase();
if (presentableText.length > 0) {

    console.log(presentableText);
    // alert(presentableText);
}

let name = "Jenny";
let phone = "867-5309";
let fact = "This is a prime number";
let songName = phone + "/" + name;
let index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
    fact = fact.toUpperCase();
    // alert(fact);
    // console.log(fact);
    // console.log(fact.substring(10, 15));
    let result = fact.substring(10, 15);
    // result = "\"" + result +"\"";
    // console.log(result);
    console.log("\"" + fact.substring(10, 15) +"!" + "\"");
}


// метод charAt
let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log("There's an @ sign at index " + i);
    }
}

// метод indexOf
let phrase = "the cat in the hat";
let indexPhrase = phrase.indexOf("cat");

console.log("there's a cat sitting at indexPhrase " + indexPhrase);

indexPhrase = phrase.indexOf("the", 5);
console.log("there's a the sitting at indexPhrase " + indexPhrase);

indexPhrase = phrase.indexOf("dog");
console.log("there's a dog sitting at indexPhrase " + indexPhrase);

// метод substring
let data = "name|phone|address";
let val = data.substring(5, 10);
console.log("Substring is " + val);

val = data.substring(5);
console.log("Substring is now " + val);

// метод split
data = "name|phone|address";
val = data.split("|");
console.log("Split array is ", val);