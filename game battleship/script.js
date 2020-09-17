let temp = 81;
let willRain = true;
let humid = (temp > 80 && willRain === true);
console.log(humid);

let guess = 6;
let isValid = (guess >= 0 && guess <= 6);
console.log(isValid);

let kB = 1287;
let tooBig = (kB > 1000);
let urgent = true;
let sendFile =
    (urgent === true || tooBig === false);
console.log(sendFile)

let keyPressed = "N";
let points = 142;
let level;
if (keyPressed === "Y" || (points > 100 && points < 200)) {
    level = 2;
} else {
    level = 1;
}
console.log(level)