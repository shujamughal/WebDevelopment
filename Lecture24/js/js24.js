// function myFnction(){
	// console.log(this);
	// this.myName="Baig";
	
// }
 // myFnction();
 // console.log(window.myName);
 
 //object creation using function constructor
 
 function Book(name, year) {
  if(!(this instanceof Book)){
	  return new Book(name,year);
  }
 this.name= name;
 this.year= year;
 }
 
 var myBook = new Book("javascript", 2015);  //new Object();
 console.log(myBook.name);
 console.log(myBook.year);