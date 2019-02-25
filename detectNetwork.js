// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

//input: string and output: string 
//if first number is 3 and second number is 8 OR first number is 3 and second number is 9 AND length is 14
//return 'Diner's Club'
//if first number is 3 and second number is 4 OR first number is 3 and second number is 7 AND length is 15, then return 'American Express'

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (((cardNumber[0] === '3' && cardNumber[1] === '8') || (cardNumber[0] === '3' && cardNumber[1] === '9')) && (cardNumber.length === 14)) {
  	return 'Diner\'s Club';
  }
  if (((cardNumber[0] === '3' && cardNumber[1] === '4') || (cardNumber[0] === '3' && cardNumber[1] === '7')) && (cardNumber.length === 15)) {
  	return 'American Express';
  }
  if ((cardNumber[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  }
  if (((cardNumber[0] === '5' && cardNumber[1] === '1') || (cardNumber[0] === '5' && cardNumber[1] === '2') || (cardNumber[0] === '5' && cardNumber[1] === '3') || (cardNumber[0] === '5' && cardNumber[1] === '4') || (cardNumber[0] === '5' && cardNumber[1] === '5')) && (cardNumber.length === 16)) {
  	return 'MasterCard';
  }
  if (((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '4') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '5') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '6') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '7') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '8') || (cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '9') || (cardNumber[0] === '6' && cardNumber[1] === '5'))&&((cardNumber.length === 16) || (cardNumber.length === 19))) {
  	return 'Discover';
  }
  if (((cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8') || (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0') || (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8') || (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')) && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	return 'Maestro';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
//STEP TWO:
//Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

//STEP THREE:
//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

