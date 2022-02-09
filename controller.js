//Denne legger til en event listener som "lytter" etter tastetrykk, også kjører vi funksjonen handleInput når 'Enter' eller 'NumpadEnter' blir trykket.
window.addEventListener('keypress', sendKey);
function sendKey(e) {
	console.log(e);
	if (e.code === 'Enter' || e.code === 'NumpadEnter') {
		handleInput(e);
	}
}

// e er Parameteret for handleInput, e.target leser verdiene der den ble påkallt, altså inputet våres.
// så definerer vi inputData til verdien av input, det vi skriver inn.
function handleInput(e) {
	const input = e.target;
	let inputData = input.value;

	inputValue = inputData;
	if (isLetterInAlphabet(inputValue.toLowerCase().split(''))) {
		// console.log('Does not contain a number');
		morseInput = convertToMorse(inputValue.toLowerCase());
	} else {
		// console.log('Contains a number');
		inputValue = '';
		morseInput = '';
		alert('Input should not contain a number or a symbol!');
	}
	show();
}

//Skal returnere Morse tilbake til funksjonen handleInput
function convertToMorse(input) {
	//Split string into array
	let arrayOfInput = input.split('');
	let morseCode = '';

	//Loops through array.
	for (let i = 0; i < arrayOfInput.length; i++) {
		const letter = arrayOfInput[i]; //Sets the value of arrayOfInput index to the variable letter.
		let indexOfLetter = alphabetArray.indexOf(letter); // expected: if letter = "c" then indexOfLetter = 2

		morseCode += morseCodeArray[indexOfLetter] + ' '; //Gets the index of the letter from alphabetArray and get the corresponding morse code from its array.
	}

	console.log('Returned value: ', morseCode);
	return morseCode;
}

//Checks if letter is in Alphabet array(alphabetArray model.js).
function isLetterInAlphabet(arr) {
	//Loops through array of letters from userinput.
	for (let i = 0; i < arr.length; i++) {
		const letter = arr[i]; //Sets the index of the array to the variable "letter"

		//Checks if letter is not in alphabetArray. If true, it returns false
		if (!alphabetArray.includes(letter)) {
			return false;
		}
	}
	//If loops finishes without returning any value, it returns true. Meaning that the array does not contain any letter that isn't in the alphabet array.
	return true;
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyToClipboard() {
	if (morseInput) {
		navigator.clipboard.writeText(morseInput);
		alert('Kopiert morsekode: ' + morseInput);
	} else {
		alert('Ingen Morsekode å kopiere.');
	}
}

// https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript
//Checks if array contains a number-
// function containsNumber(arr) {
// 	//Loops through array
// 	for (let i = 0; i < arr.length; i++) {
// 		const letter = arr[i]; //Sets index of array to variable "letter"
// 		let parsed = parseInt(letter); //Parses letter to int, if letter is not a number it returns "NaN"
// 		// Checks if "parsed" is not NaN(not a number), so if the letter is a number it returns true;
// 		if (!isNaN(parsed)) {
// 			return true;
// 		}
// 	}
// }
