"use strict"


runPalindrome()
function runPalindrome () {
	let word = getUserInput("Type a word to see if it is a Palindrome.");
	let newWord = reverseString (word);
		
		if (newWord === word) {
			document.write("You have succeeded the Palindrome.");
		}	
		else {
			document.write("You have failed the Palindrome.");
		}
	
}




function getUserInput (word) {
	let response = prompt(word);
	return response;
	
	
}

function reverseString (word) {
	let splitString = word.split("");
	let reverseArray = splitString.reverse();
	let newWord = reverseArray.join("");
	return newWord;
}