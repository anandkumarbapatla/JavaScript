let userName = "Anand Kumar";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf('A'));
console.log(userName.lastIndexOf('a'));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

let firstName;
let lastName;

lastName = userName.slice(userName.indexOf(' ')+1);
firstName = userName.slice(0,userName.indexOf(' '));

console.log(firstName);
console.log(lastName);