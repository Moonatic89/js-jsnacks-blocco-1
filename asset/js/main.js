// #region Variable Init


// Intro Variables

let securityCheck = false;
let message;
let htmlElement = document.querySelector(".container");
let selector = prompt(`Hi! Which "game" do you want to play? 
[Select a number from 1 to 9]`);

// #endregion


//First check for correct input
checkForCorrectInput();

while (securityCheck != true) {

    selector = prompt(`${message} 
     [Select a number from 1 to 9]`);
    checkForCorrectInput();

}


if (selector == 1) {
    higherNumbers(); 1
} else if (selector == 2) {
    longerWords();
} else if (selector == 3) {
    sumOfTen();
} else if (selector == 4) {
    searchNameInList();
} else if (selector == 5) {
    arrayOfOdds();
} else if (selector == 6) {
    powerCube();
} else if (selector == 7) {
    powerToThousand();
} else if (selector == 8) {
    fourDigitSum();
} else if (selector == 9) {
    tenSumAndAverage();
}



//Game 1: User types 2 numbers with 2 prompts, then the software outputs the higher.

function higherNumbers() {

    const highNumber1 = prompt(`Type a number 
                          [1/2]`);
    const highNumber2 = prompt(`Type a second number 
                          [2/2]`);

    if (highNumber1 > highNumber2) {
        htmlElement.innerHTML = `${highNumber1}(1st number) is higher!`
    } else if (highNumber1 < highNumber2) {
        htmlElement.innerHTML = `${highNumber2}(2nd number) is higher!`
    } else {
        htmlElement.innerHTML = `${highNumber1}(1st number) and ${highNumber2}(2nd number) are equal!`
    }
}

//Game 2: User types 2 words with 2 prompts, then the software outputs the shortest, then the longest.

function longerWords() {

    const longWord1 = prompt(`Type a word 
                          [1/2]`);
    const longWord2 = prompt(`Type a second word 
                          [2/2]`);

    if (longWord1.length > longWord2.length) {
        htmlElement.innerHTML = `${longWord2}(2nd word) is shorter than ${longWord1}(1st word)`
    } else if (longWord1.length < longWord2.length) {
        htmlElement.innerHTML = `${longWord1}(1st word) is shorter than ${longWord2}(2nd word)`
    } else {
        htmlElement.innerHTML = `${longWord1}(1st word) and ${longWord2}(2nd word) have the same length!`
    }

}

//Game 3: The software asks for 10 numbers, then outputs the sum.

function sumOfTen() {

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const numbersToSum = (prompt(`Insert a number to sum
        [${i + 1}] of 10] `));
        sum += numbersToSum;
        htmlElement.innerHTML = `The sum of all the numbers is ${sum}!`
    }
}

//Game 4: Asks the user its name and outputs if he can enter the great Gatsby party. (array)

function searchNameInList() {
    const allowed = ["pino", "lino", "gino", "rino", "mino"];
    const userName = prompt("Please tell me your name before entering the GREAT GATSBY exclusive party:").toLowerCase();
    message = "You are not allowed to enter this really, really exclusive party."
    for (let i = 0; i < allowed.length; i++) {

        if (userName == allowed[i]) {
            message = "You are on the list! Please enter, and have fun!"
        }
        htmlElement.innerHTML = message;
    }

}

//Game 5: Create an empty array, ask the user for 6 numbers, if it's odd add it to the array.

function arrayOfOdds() {

    const oddNumbers = [];

    for (let i = 0; i < 6; i++) {

        const numberToCheck = (prompt(`Insert a number to add to the even Array
        [${i + 1}] of 6] `));

        if (!(numberToCheck % 2 === 0)) {
            oddNumbers.push(numberToCheck);
        }
    }

    htmlElement.innerHTML = oddNumbers;
}

//Game 6: Asks for a N number, the outputs the cube of the first N numbers.

function powerCube() {

    const nNumber = prompt("Type a number: I will print the cube of every number from 1 to the one of your choice.")
    const powerNumbers = [];
    let i = 0;
    while (i < nNumber) {
        powerNumbers.push(((i + 1) * (i + 1)) * (i + 1));

        i++;
    }
    htmlElement.innerHTML = powerNumbers;

}

//Game 7: Outputs power of 2 until 1000.

function powerToThousand() {

    const powerNumbers = [];

    let j = 2;
    while (j < 1000) {

        let power = (j * 2);

        j = power;

        if (j < 1000) {
            powerNumbers.push(power);

        }
    }

    htmlElement.innerHTML = `Here is the list of numbers which are suare power of 2 and lesser than 1000:${powerNumbers}`;

}

//Game 8: Asks for a 4 digit number and outputs the sum of the 4 digits.

function fourDigitSum() {
    const fourDigit = prompt("Please type a 4 digit number");

    let digitSum = 0;
    for (let i = 0; i < fourDigit.length; i++) {
        digitSum += parseInt(fourDigit[i]);

    }
    htmlElement.innerHTML = `The sum of the single digits you wrote is ${digitSum}`;
}

//Game 9: outputs the sum and the average of the first 10 numbers.

function tenSumAndAverage() {

    let sum = 0;

    for (let i = 0; i < 10; i++) {

        sum += (i + 1);

    }
    let average = (sum / 10);
    htmlElement.innerHTML = ` The sum of the first 10 numbers is ${sum}, and their average is ${average}.`;
}






// #region Functions

// Intro Functions
function checkForCorrectInput() {

    if (isNaN(selector)) {
        message = "You're really funny! Now, please type a NUMBER between 1 and 9.";
    } else if (selector > 9 || selector < 1) {
        message = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
        ////        message = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
    } else {
        securityCheck = true;
    }

}

//#endregion

