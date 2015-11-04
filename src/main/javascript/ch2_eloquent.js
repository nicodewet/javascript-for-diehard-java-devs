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
/**
 * Eloquent JavaScript Ch2 Exercise: Chessboard
*/
var chessBoardStr = ""
var size = 100;
for (var i = 1; i < (size + 1); i++) {
	var evenRow = false;
	if ( (i % 2) == 0 ) {
		evenRow = true;
	}
	if (!evenRow) {
		for (var j = 1; j < (size + 1); j++) {
			if (  (j % 2) == 0  ) {
				chessBoardStr = chessBoardStr + "#"
			} else {
				chessBoardStr = chessBoardStr + " "
			}
		}
		chessBoardStr = chessBoardStr + "\n"
	} else {
		for (var k = 1; k < (size + 1); k++) {
			if (  (k % 2) == 0  ) {
				chessBoardStr = chessBoardStr + " "
			} else {
				chessBoardStr = chessBoardStr + "#"
			}
		}
		chessBoardStr = chessBoardStr + "\n"
	}
}
print(chessBoardStr)