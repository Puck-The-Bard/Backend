//console test
console.log('Wazzup');

function RandomName(Name){

console.log(name);

var RandNames = [" The Drunk", " The Incontenant", " The Spud", " The Less than Resiliant", " The Onion Eyed Oaf", " The Lewd"];

let random = Math.floor(Math.random() * (5 - 0 + 1) ) + 0;

console.log(Name + RandNames[random]);

return Name + RandNames[random];
}


function HandlePress(){
var name = document.getElementById("fname").value;

document.getElementById("nameGen").innerHTML = "Your Nickname is: " + RandomName(name);
}


//Links to resources used
/*
https://www.youtube.com/watch?v=W6NZfCO5SIk - Mainly this

https://www.w3schools.com/js/js_arrays.asp
*/