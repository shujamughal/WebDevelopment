//in javascript functions are objects.

function add(x, y){
	return x+y;
}

console.log(add(4,5));

add.description= "This function takes two parameters and return their sum.";
add.version= "1.0.0";

console.log(add);
console.log(add.version);
console.log(add.description);

//defining function inside a function.

function addition(number){

	var innerFunction = function(x){
		return number+x;
	};
 return innerFunction;	
}

var addByFive= addition(5);

console.log(addByFive(3));

var incrementByOne = addition(1);
console.log(incrementByOne(3));

//pass function as argument into other function.


function performOperation(x,operation){
	return operation(x);
	
}

console.log(performOperation(3,addByFive));
console.log(performOperation(3,incrementByOne));

