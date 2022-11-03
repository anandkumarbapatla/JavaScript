/*
There are 4-ways to declare variables in JavaScript
Using var - used from 1995 to 2015
Using let - preferred to use
Using const - if the value is not going to change after declaration
Using nothing
*/

document.getElementById("submit").onclick = function(){
  let side1 = Number(document.getElementById("side1").value);
  let side2 = Number(document.getElementById("side2").value);
  let side3 = Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2));
  document.getElementById("p1").innerHTML = "Hypotenus: "+side3;
}

