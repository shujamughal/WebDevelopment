 function Book(name, year) {
  if(!(this instanceof Book)){
	  return new Book(name,year);
  }
 this.name= name;
 this.year= year;
 }
 
 Book.prototype.getName= function(){
	 return "This book name is "+ this.name;
	};
 
 var myBook = new Book("javascript1", 2015);
 var myBook2 = new Book("javascript2", 2016);
 var myBook3 = new Book("javascript3", 2017);
console.log(myBook.getName()); 
console.log(myBook2.getName()); 
console.log(myBook3.getName()); 

//object literal and this.

var person = {name:"abc",
			getName: function(){
				var self = this;
				
				var modifyName= function(){
					self.name="xyz";
					
				};
				modifyName();
				
				return this.name;
			}

};

console.log(person.getName());