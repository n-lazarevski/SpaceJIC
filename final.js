d = localStorage.getItem("distStorage");
v = localStorage.getItem("speedStorage");
let name = localStorage.getItem('spacecraft');
let ETA = Math.round(d/v);
let day = ETA / 24 %365;
let hour = ETA % 24;
let year = ETA/24 / 365;

document.getElementById('craft').innerHTML = name;

if(v != 'instant'){
    document.getElementById("days").innerHTML = Math.round(day);
    document.getElementById("years").innerHTML = Math.round(year);
    document.getElementById("hours").innerHTML = Math.round(hour);
    document.getElementById("gen").innerHTML = Math.round(year/30);
}
else {
    document.getElementById("days").innerHTML = 0;
    document.getElementById("years").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("gen").innerHTML = 0;
    document.getElementById("wormhole").innerHTML = "Instant arrival";
}
document.getElementById("dest").innerHTML = localStorage.getItem("Planet");