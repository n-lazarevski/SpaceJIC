/*
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("myBtn2");

let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("myBtn3");

let modal4 = document.getElementById("myModal4");
let btn4 = document.getElementById("myBtn4");

let modal5= document.getElementById("myModal5");
let btn5 = document.getElementById("myBtn5");

let modal6 = document.getElementById("myModal6");
let btn6 = document.getElementById("myBtn6");
// When the user clicks the button, open the modal

btn2.onclick = function() {
    modal2.style.display = "block";
};
btn3.onclick = function() {
    modal3.style.display = "block";
};
btn6.onclick = function() {
    modal6.style.display = "block";
};
btn4.onclick = function() {
    modal4.style.display = "block";
};
btn5.onclick = function() {
    modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
btn.onclick = function() {
    modal.style.display = "block";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal || event.target === modal2 || event.target === modal3 || event.target === modal4 || event.target === modal5 || event.target === modal6) {
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
    }
};
*/


var V = [];
var speed = 0;
V = document.getElementsByClassName('btn');
console.log(V);

V[0].onclick = function() {
    speed = V[0].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Space Shuttle');
};
V[1].onclick = function() {
    speed = V[1].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Saturn V');

};
V[2].onclick = function() {
    speed = V[2].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Falcon 9');

};
V[3].onclick = function() {
    speed = V[3].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Starship');

};
V[4].onclick = function() {
    speed = V[4].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Generation Ship');

};
V[5].onclick = function() {
    speed = V[5].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Ion Drive');

};
V[6].onclick = function() {
    speed = V[6].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Project Orion');

};
V[7].onclick = function() {
    speed = V[7].value;
    console.log((vel/speed)/24); 
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Lightsail');

};
V[8].onclick = function() {
    speed = V[8].value;
    console.log((vel/speed)/24);
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Warp Drive');

};
V[9].onclick = function(){
    speed = V[9].value;
    localStorage.setItem("speedStorage", speed);
    localStorage.setItem("spacecraft", 'Wormhole');
};
console.log(localStorage.getItem("distStorage"));
var vel = localStorage.getItem("distStorage");



