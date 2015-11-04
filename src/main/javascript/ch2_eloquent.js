/**
 * Eloquent JavaScript Ch2 Exercise: Looping a Triangle
 */
var output = ""
do {
	output = output + "#"
	print(output)
} while (output.length < 8)
/**
 * Eloquent JavaScript Ch2 Exercise: FizzBuzz
 */
for (var number = 1; number < 101; number++) {
	if ( ((number % 5) == 0) && ((number % 3) == 0) )
		print("FizzBuzz")
	else if ( (number % 3) == 0) 
		print("Fizz")
	else if ( ((number % 5) == 0) && ((number % 3) != 0) )
		print("Buzz")
	else
		print(number)
}
