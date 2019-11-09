function first(event) {
    event.target.parentNode.parentNode.childNodes[3].className = "decoration";
}
function second(event) {
    event.target.parentNode.parentNode.parentNode.style.display = "none";
}
function third() {
    "use strict";
    var a = document.getElementById("tablea");
    let x = document.createElement("TR");
    
    let b = document.createElement("TD");
    let c = document.createElement("BUTTON");
    c.className = "butt";
    c.onclick = function(event){
        event.target.parentNode.parentNode.childNodes[1].style.textDecoration = "line-through";
    }
    b.appendChild(c);
    x.appendChild(b);
    
    let  q= document.createElement("TD");
    let w = prompt("Please enter your plan", "Sleep");
    let r = document.createTextNode(w);
    let e = document.createElement("P");
    e.appendChild(r);
    q.appendChild(e);
    x.appendChild(q);
    
    let t = document.createElement("TD");
    let u = document.createElement("BUTTON");
    u.onclick=function(event) {
        event.target.parentNode.parentNode.parentNode.style.display = "none";
    }
    
    let i = document.createElement("IMG");
    i.src = "2.jpeg";
    i.width = "30";
    i.height = "30";
    u.appendChild(i);
    t.appendChild(u);
    x.appendChild(t);
    
    a.appendChild(x);
}