var name ="thea";
console.log(name);

var names = [];//most common
var names1 = new array();//this works too. don't do the other.

var names2 = ["dan", "dave", "dexter"];
var ages = [12,10,15];

console.log(names2.length);
names2.push("dante");
console.log(names2);

names.pop(); //takes the last one off

// a pet oject
var pet = {
  name: "billy",
  "age":12,//age with the quotes is the same as without. It is an example of a loose rule
  interests:["eating", "sleeping", "playing"],
  isDog: true,
  socialMediaAccounts: {
    instagram: "www.instagram.com/billyTheDog",
    facebook: "www.facebook.com/billyTheDog",
    twitter: "www.twitter.com/billyTheDog"
  }
}
console.log(pet.name);
console.log(pet.socialMediaAccounts.twitter);
console.log(pet.interests);
pet.enemy = "sam";// this is a way to enter key pairs on the fly
delete pet.isDog;//will delete the attribute from the object

var data = {};
data.status = "OK";
data.facts = "Object";
data.students = ["bob", "sam"];

var x; //is undefined
typeof x //will return undefined
var x = 5;
typeof x //will return number
typeof(x) //is the same as typeof x

var num = 15;
var n = num.toString();
console.log(num)
console.log(n)

var age = "10.0";
var a = parseInt(age)

console.log(age)
console.log(a)

var price = "9.99";
var pFloat = parseFloat(price);
var pInt = parseInt(price);

console.log(price) // prints the string "9.99"
console.log(pFloat) // prints the number 9.99
console.log(pInt) // prints the number 9


//functions

var sayHi= function(){
  console.log('hi');
}
sayHi();
function sayHello(){
  console.log('hello');
}

function describePet(name, age, gender){
  var genderPronoun = "she";
  if(gender=="male") genderPronoun = "he";

  console.log("This is " +name+ " and "+genderPronoun+" is "+age+" years old.")

  var humanYears = age*7;
  console.log("In human years, that's like "+humanYears+" years");
}

describePet("Joey", 7, "male");

describePet("Jill", 4, "female");

//the anatomy of client side js
//
//on page load, on user click, or whenever an event occurs that we want to use to determine the function call.
//
