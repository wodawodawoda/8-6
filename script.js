var a = 10;
	b = 5;
	value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

//Classic if else
if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else {
	console.log('wynik równy zero');
}

var checkNumber = value < 0 ? 'wynik ujemny' : value > 0 ? 'wynik dodatni' : 'wynik równy zero';
console.log(checkNumber);

//Shorthand if else statement
var shortHand = value < 0 ? 'wynik ujemny' : value > 0 ? 'wynik dodatni' : 'wynik równy zero';
console.log(shortHand);



//ES6
Math.sign(value);



