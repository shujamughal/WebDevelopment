// in javascript,primitives are passed by value 
// and objects are passed by reference.

var x = 2;
var y= x;

console.log("x: "+ x);
console.log("y: "+ y);

y=4;
console.log("--after updating y variable--");
console.log("x: "+ x);
console.log("y: "+ y);

var x = {a:2};
var y= x;

console.log( x);
console.log( y);

y.a=4;
console.log("--after updating y.a variable--");
console.log( x);
console.log( y);


function PassByValueExample(value){
	value=4;
}

var x =2;
console.log("before function call: " + x);

PassByValueExample(x);
console.log("after call: "+x);

function PassByReferenceExample(value){
	value.a=4;
}

var x = {a:2};
console.log("before function call: " + x.a);

PassByReferenceExample(x);
console.log("after function call: "+x.a);
