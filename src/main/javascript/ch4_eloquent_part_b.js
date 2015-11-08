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
 
function listToArray(node) {
	var array = [];
	while(node != null) {
		array.push(node.value)
		node = node.pointer
	}
	return array;
}
// test
var arr = [1,2,3,4,5,6]
var node = arrayToList(array);
arr = listToArray(node)
print(arr)

function prepend(node, list) {
	node.pointer=list
}
function nth(number, list) {
	var index = 1;
	while(node != null) {
		if (number == index) {
			return node
		}
		index++
		node = node.pointer
	}
	return undefined;
}

// test
var test_arr = ["a", "b", "c", "dee"]
var node = arrayToList(test_arr)
var chosen_node = nth(4, node)
print(chosen_node.value)
chosen_node = nth(5, node)
print(chosen_node)