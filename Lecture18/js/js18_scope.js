//var message = "I m in global scope";
console.log("global: " + message)

function A()
{
	//var message = "in function A";
	console.log("a: "+ message);
	function B()
	{
		console.log("b:"+message);
	}
	B();
}

A();