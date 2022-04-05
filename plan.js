var planets = [];
var distance = 0;
let name;
planets = document.getElementsByClassName('Pbtn');
console.log(planets);
planets[0].onclick = function(){
    distance = planets[0].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet","Moon");"Moon"
};
planets[1].onclick = function(){
    distance = planets[1].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet","Venus");
};
planets[2].onclick = function(){
    distance = planets[2].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet","Europa");
};
planets[3].onclick = function(){
    distance = planets[3].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet","Teegarden's star b");
};
planets[4].onclick = function(){
    distance = planets[4].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet","TRAPPIST 1e");
};
planets[5].onclick = function(){
    distance = planets[5].value;
    localStorage.setItem("distStorage", distance);
    localStorage.setItem("Planet", "Gliese 436b");
};

/*let objects = [
    [1, 0],
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 1],
    [0, 0]
]

let book = document.getElementById("booking");
let a = 100;

let bool1 = true;
let bool2 = true;
let bool = false;
book.onclick = function() {
    for(let i=0; i<6; i++){
        
            if(objects[i][0] == document.getElementById('solar').checked){
                bool1=true;
            }
            else {
                bool1=false;
            }

            if(objects[i][1] == document.getElementById('earth').checked){
                bool2=true;
            }
            else {
                bool2=false;
            }
            if(bool1 == true && bool2 == true){
                a=i;
                bool=true;
                break;
            }
    }
    switch(a){
        case 0: console.log("Moon"); name="Moon"; break;
        case 1: console.log("Venus"); name="Venus";break;
        case 2: console.log("Europa"); name="Europa";break;
        case 3: console.log("TeeGarden"); name="TeeGarden";break;
        case 4: console.log("TRAPPIST 1e"); name="TRAPPIST 1e";break;
        case 5: console.log("Gliese 436b"); name="Gliese 436b";break;
        default: console.log("No planet"); name="No planet";break;
    }    
    localStorage.setItem("Planet", name);
    distance = planets[a].value;
    localStorage.setItem("distStorage", distance);
};
*/


