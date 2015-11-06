
/**
 * Sum of Range
 */
function range(start, end) {
	var numbers = [];
	for (var i = start; i <= end; i++) {
		numbers.push(i);
	}
	return numbers;
}
function sum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) { 
		sum += array[i]
	}
	return sum;
}
print(sum(range(1,2)))

/**
 * Reversing an Array
 */
function reverseArray(array) {
	var newArray = [];
	var newArrayIndex = 0;
	for (var i = array.length; i > 0; i--) {
		newArray[newArrayIndex] = array[i-1]
		newArrayIndex++;
	}
	return newArray;
}
print("reverseArray")
var values = [1,2,3,4,5]
print(values)
var moreValues = []
moreValues = reverseArray(values);
print(values)
print(moreValues)

function reverseArrayInPlace(array) {
	var replaceMeIndexUpper = (array.length - 1)
	var stoppingPoint = array.length / 2;
	for (var i = 0; i < array.length; i++) {
		if (i >= stoppingPoint) {
			break;
		}
		var lowerSaveBeforeOverwrite = array[i]
		array[i] = array[replaceMeIndexUpper]
		array[replaceMeIndexUpper] = lowerSaveBeforeOverwrite
		replaceMeIndexUpper--
	}
	return array
}
print("reverseArrayInPlace")
print(values)
print(reverseArrayInPlace(values))
print(values)
/**
 * EXPERIMENTATION
 */

// Create an object of type UserException
function UserException(message) {
	this.message = message;
	this.name = "UserException";
}

// Make the exception convert to a pretty string when used
// as a string (e.g. by the error console)
UserException.prototype.toString = function() {
	return this.name + ': "' + this.message + '"'
}

function remove(array, index) {
	if (index == undefined) {
		throw new UserException("index is not optional");
	}
	return array.slice(0, index)
		.concat(array.slice(index + 1));
}
try {
	print (remove(["a","b","c","d","e"]))
} catch (e) {
	print(e.toString());
}

var myVar = 10;