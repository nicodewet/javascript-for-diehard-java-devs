function arrayToList(array) {
	var rootListNode = {value: array[0], pointer: null}
	for (var i = 1; i < array.length; i++) {
		var newNode = {value: array[i], pointer: null}
		if (i == 1) {
			rootListNode.pointer = newNode;
		}
	}
	return rootListNode;
}
function ListToArray() {
	
}
function prepend() {
	
}
function nth() {
	
}