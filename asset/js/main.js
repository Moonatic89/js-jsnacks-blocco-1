// #region Variable Init


// Intro Variables

let securityCheck = false;
let warning;
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






// #region Functions

// Intro Functions
function checkForCorrectInput() {

    if (isNaN(selector)) {
        console.log("Is not a number");
        warning = "You're really funny! Now, please type a NUMBER between 1 and 9.";
    } else if (selector > 9) {
        console.log("Is higher than 9 ");
        warning = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
    } else if (selector < 1) {
        console.log("Is lower than 1 ");
        warning = "You're really funny! Now, please type a number BETWEEN 1 AND 9.";
    } else {
        securityCheck = true;
    }

}

//#endregion

