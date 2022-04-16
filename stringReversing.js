function reverseString1(toReverse) {
    let reversed = "";
    for (let i = 1; i <= toReverse.length; i++) {
        reversed += toReverse[toReverse.length - i];
    }
    return reversed;
}

const reverseString2 = toReverse => toReverse.split("").reverse().join("");

const reverseString3 = toReverse => {
    if (toReverse === "") {
        return "";
    } else {
        return reverseString3(toReverse.substr(1)) + toReverse.charAt(0);
    }
}

const reverseString4 = function(toReverse) {
    let reversed = "";
    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversed += toReverse[i];
    }
    return reversed;
}

function reverseString5(toReverse) {
    let reversed = [];
    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversed.push(toReverse[i]);
    }
    return reversed.join("");
}

const reverseString6 = function(toReverse) {
    let reversed = [];
    for (let i = 1; i <= toReverse.length; i++) {
        reversed.push(toReverse[toReverse.length - i]);
    }
    return reversed.join("");
}

const reverseString7 = toReverse => {
    for (var i = toReverse.length - 1, reversed = ""; i >= 0; reversed += toReverse[i--])
    {};
    return reversed;
}

function reverseString8(toReverse) {
    for (var i = 1, reversed = ""; i <= toReverse.length; reversed += toReverse[toReverse.length - i++])
    {};
    return reversed;
}

const reverseString9 = function(toReverse) {
    let reversed = "";
    let cnt = toReverse.length;
    while (cnt > 0) {
        reversed += toReverse.substring(cnt-1, cnt);
        cnt--;
    }
    return reversed;
}

const reverseString10 = toReverse => {
    let reversed = toReverse.split("");
    for (let i = 0; i < reversed.length; i++) {
        reversed.splice(i, 0, reversed.pop());
    }
    return reversed.join("");
}

const reverseString11 = toReverse => [...toReverse].reverse().join("");

function reverseString12(toReverse) {
    let reversed = "";
    for (let letter of toReverse) {
        reversed = letter + reversed;
    }
    return reversed;
}

const reverseString13 = toReverse => toReverse.split("").reduce((reversed, letter) => letter + reversed);

const reverseString14 = function(toReverse) {
    let reversed = "";
    toReverse.split("").forEach(element => reversed = element + reversed);
    return toReverse.split("").reduce((reversed, letter) => letter + reversed);
}

let toReverse = "kat ote aD";
console.log(reverseString1(toReverse));
console.log(reverseString2(toReverse));
console.log(reverseString3(toReverse));
console.log(reverseString4(toReverse));
console.log(reverseString5(toReverse));
console.log(reverseString6(toReverse));
console.log(reverseString7(toReverse));
console.log(reverseString8(toReverse));
console.log(reverseString9(toReverse));
console.log(reverseString10(toReverse));
console.log(reverseString11(toReverse));
console.log(reverseString12(toReverse));
console.log(reverseString13(toReverse));
console.log(reverseString14(toReverse));
