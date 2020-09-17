function LieDetectorTest() {
    let lies = 0;
    let stolenDiamind = { };
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    let car = {
        kaysInPocked: null
    };
    if (car.keysInPocked) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    let foundYouTheCrimeScene = [ ];
    if (foundYouTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    if (foundYouTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    let yourName = " ";
    if (yuorName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}
let numberOfLies = LieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}