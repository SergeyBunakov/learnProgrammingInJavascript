console.log('Learn Array!');

// =====  Create: Word Generator  =====
/*  ======================================================  */
/*
function makePhrases() {
  let word1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  let word2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let word3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  let random1 = Math.floor(Math.random() * word1.length);
  let random2 = Math.floor(Math.random() * word2.length);
  let random3 = Math.floor(Math.random() * word3.length);

  let phrase = word1[random1] + " " + word2[random2] + " " + word3[random3];
  alert(phrase);
};

makePhrases();
*/
/*  ======================================================  */


// Поставлена задача определить лучший раствор для производства мыльных пузыре
/*  ======================================================  */

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let highScore = 0;
let output;

for (let i = 0; i < scores.length; i++) {
    output = 'Bubble solution #' + i + ' scores : ' + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log('Babble tests: ' + scores.length);
console.log('Highest babble score: ' + highScore);

let bestSolutions = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}

console.log('Solutions with the highest: score ' + bestSolutions);
/*  ======================================================  */
