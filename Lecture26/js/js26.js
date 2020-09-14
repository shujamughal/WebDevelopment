//Arrays

// var myArray = new Array();

// myArray[0]= "shuja";
// myArray[1]= 234;
// myArray[2]= {course : "web development"};
// myArray[3]= function(name){
	// console.log("hello " + name);
// }

// console.log(myArray[0]);
// console.log(myArray[2].course);

// myArray[3]("ali");

//short form

// var myArray = ["shuja",
 // 234,
 // {course:"web"},
 // function(n){console.log("hi "+n)}
 
 // ];
// console.log(myArray[0]);
// console.log(myArray[2].course);

// myArray[3]("ali");


// var myArray = ["shuja", "baig", "ali"];



// myArray[4] = "rehman";


// for(var i=0; i< myArray.length; i++){
	
	// console.log("hi " + myArray[i]);
// }


 var myArray = ["shuja", "baig", "ali"];
 
 myArray.country = "Pakistan";
 
  for(var prop in myArray){
	 
	 console.log(prop + " : "+ myArray[prop]);
 }
 
 // var myObj = {
	 // name:"rehman",
	 // course: "web",
	 // city : "lahore"
	 
 // }
 
 // for(var prop in myObj){
	 
	 // console.log(prop + " : "+ myObj[prop]);
 // }