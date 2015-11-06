/**
 * Eloquent JavaScript Ch3 Exercise:
 */

/**
 * Minimum
 */
function min(a,b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
print ("MINIMUM")
print (min("a", "b"))
print (min(200, 100))

/**
 * Recursion
 */
function isEven(number) {
	
	if(number < 0) {
		return isEven(-number)
	}
	
	if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else {
		return isEven(number -2);
	}
}
print("ISEVEN")
print("50 is even? " + isEven(50))
print("75 is even? " + isEven(75))
print("-1 is even? " + isEven(-1))
/**
 * Bean Counting  
 */
function countChar(char, string) {
	var str = String(string);
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == char) {
			count++;
		}
	}
	return count;
}
print(countChar("B", "BaaBaaB"))