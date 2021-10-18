// #region Variable Init


// Intro Variables

let securityCheck = false;
let warning;
let htmlElement = document.querySelector(".container");
let selector = prompt(`Hi! Which "game" do you want to play? 
[Select a number from 1 to 9]`);

// #endregion


//First check for correct input
checkForCorrectInput();

while (securityCheck != true) {
    console.log("repeat");

    selector = prompt(`${warning} 
     [Select a number from 1 to 9]`);
    checkForCorrectInput();

}


if (selector == 1) {
    higherNumbers(); 1
} else if (selector == 2) {
    // game 2
} else if (selector == 3) {
    // game 3
} else if (selector == 4) {
    //game 4
} else if (selector == 5) {
    //game 5
} else if (selector == 6) {
    //game 6
} else if (selector == 7) {
    //game 7
} else if (selector == 8) {
    //game 8
} else if (selector == 9) {
    //game 9
}



//Game 1: User types 2 numbers with 2 prompts, then the software outputs the higher.

function higherNumbers() {

    const highNumber1 = prompt(`Type a number 
                          [1/2]`);
    const highNumber2 = prompt(`Type a second number 
                          [2/2]`);

    if (highNumber1 > highNumber2) {
        htmlElement.innerHTML = `${highNumber1}(1st number) is higher than ${highNumber2}(2nd number)`
    } else if (highNumber1 < highNumber2) {
        htmlElement.innerHTML = `${highNumber2}(2nd number) is higher than ${highNumber1}(1st number)`
    } else {
        htmlElement.innerHTML = `${highNumber1}(1st number) and ${highNumber2}(2nd number) are equal!`
    }
}



//Game 2: User types 2 words with 2 prompts, then the software outputs the shortest, then the longest.

//Game 3: The software asks for 10 numbers, then outputs the sum.

//Game 4: Asks the user its name and outputs if he can enter the great Gatsby party. (array)

//Game 5: Create an empty array, ask the user for 6 numbers, if it's odd add it to the array.

//Game 6: Asks for a N number, the outputs the cube of the first N numbers.

//Game 7: Outputs power of 2 until 1000.

//Game 8: Asks for a 4 digit number and outputs the sum of the 4 digits.

//Game 9: outputs the sum and the average of the first 10 numbers.




// #region Functions

// Intro Functions
function checkForCorrectInput() {

    if (isNaN(selector)) {
        warning = "You're really funny! Now, please type a NUMBER between 1 and 9.";
    } else if (selector > 9) {
        warning = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
    } else if (selector < 1) {
        warning = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
    } else {
        securityCheck = true;
    }

}

//#endregion

