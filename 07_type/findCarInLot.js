function findCarInLot(car) {
    for (i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}
let chevy = {
    make: "Chevy",
    model: "Bel Air"
};
let taxi = {
    make: "Webville Mobile",
    model: "Taxi"
};
let fiat1 = {
    make: "fiat",
    model: 500
};
let fiat2 = {
    make: "Fiat",
    model: 500
};
let lot = [chevy, taxi, fiat1, fiat2];
let loc1 = findCarInLot(fiat2);
let loc2 = findCarInLot(taxi);
let loc3 = findCarInLot(chevy);
let loc4 = findCarInLot(fiat1);
console.log(loc1);
console.trace(loc1);
console.table(loc1);
console.trace(loc2);
console.trace(loc3);
console.trace(loc4);