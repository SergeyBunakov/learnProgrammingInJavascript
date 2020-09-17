// Larry code is the first option
/*function validate (phoneNumber) {
    if(phoneNumber.length !== 8) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}
validate('123-4567');*/

// Larry code is the second option
/*
function validate (phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber < 7) {
        return false;
    }
    for (i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}
validate(123-4567);
*/

// Brad's code is the first option
/*
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(4);
    if (phoneNumber.charAt(3) !== '-' || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}
validate(123-4567);
*/

// Brad's code is the second option
/*
function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(phoneNumber.length(-4));
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === '-');
    }
    return true;
}
validate(123-4567);
*/

// Alternate code Amy
function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

