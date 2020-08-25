//how to create objects in javascript.

var person = {
	
	firstName : "Alishba",
	lastName : "Baig"
};

var newPerson = new Object();
newPerson.firstName = "Ibrahim";
newPerson.lastName= "baig";

console.log(newPerson);

newPerson.contactInfo = new Object();

newPerson.contactInfo.PhoneNumber = "123456";
newPerson.contactInfo.city = "Lahore";
console.log(newPerson);

newPerson["home town"]="Barcelona";
console.log(newPerson["home town"]);

var countryName = "country Name";

newPerson[countryName]="Pakistan";
console.log(newPerson);

console.log(newPerson[countryName]);


//function default values.


function buyBookFrom(shop){
	shop= shop || "Daraz.pk";
	console.log("you buy book from : " + shop);
}

buyBookFrom("Amazon");

buyBookFrom();