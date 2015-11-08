function arrayToList(array) {
	var rootListNode = {value: array[0], pointer: null}
	var previousNode = rootListNode;
	for (var i = 1; i < array.length; i++) {
		var newNode = {value: array[i], pointer: null}
		previousNode.pointer = newNode;
		newNode.value = array[i];
		previousNode = newNode;
	}
	return rootListNode;
}
// test
var array = [1,2,3,4,5]
var node = arrayToList(array);
while(node != null) {
	print(node.value)
	node = node.pointer
}
 
function ListToArray() {
	
}
function prepend() {
	
}
function nth() {
	
}