//Closures


// function myFunction(){
	// var name= "baig"; //local variable
	
	// function displayName(){ //inner function
		// console.log(name);
	// }
	
	// displayName();
// }

// myFunction();

// function myFunction(){
	// var name= "baig"; //local variable
	
	// function displayName(){ //inner function
		// console.log(name);
	// }
	
	// return displayName;
// }

// var func =  myFunction();

// func();

function makeAdder(x){
	
	return function(y){
		return x+y;
	};
	
}

var add5 =makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
