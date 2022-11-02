/*
There are 4-ways to declare variables in JavaScript
Using var - used from 1995 to 2015
Using let - preferred to use
Using const - if the value is not going to change after declaration
Using nothing
*/

document.getElementById("submit").onclick = function(){
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  document.getElementById("p1").innerHTML = "Hi!! "+firstName+" "+lastName;
  document.getElementById("p2").innerHTML = "Your Age is:"+age;
  age++;
  document.getElementById("p3").innerHTML = "Your Age after birthday will be:"+age;
}

