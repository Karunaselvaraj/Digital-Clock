var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");
var n = document.getElementById("noon");

function digital() {
    let currhour = new Date().getHours();
    let currmin = new Date().getMinutes();
    let currsec = new Date().getSeconds();
    let currnoon = currhour >= 12 ? "PM" : "AM";
    currhour = currhour % 12 || 12; 
    h.innerHTML = currhour < 10 ? "0" + currhour : currhour;
    m.innerHTML = currmin < 10 ? "0" + currmin : currmin;
    s.innerHTML = currsec < 10 ? "0" + currsec : currsec;
    n.innerHTML = currnoon;
}
setInterval(digital, 1000);
digital();
