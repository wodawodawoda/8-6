var a = 3
	b = 4
	value = (a * a) - (2 * a * b) - (b * b);

console.log(c);

if (value < 0) {
	console.log('wynik ujemny')
} else if (value > 0) {
	console.log('wynik dodatni')
} else {
	console.log('wynik równy 0')
};

value < 0 ? console.log('wynik ujemny') : value > 0 ? console.log('wynik dodatni') : console.log('wynik równy zero');