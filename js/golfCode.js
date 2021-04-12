const click = document.getElementById("hit").onclick = Score;

function Score(strokes, par){
    strokes = Math.floor(Math.random()*10);
    document.getElementById("gStrokes").innerHTML = strokes;
    par = Math.floor(Math.random()*10);
    document.getElementById("gPar").innerHTML = par;
    


    return (strokes == 1)? document.getElementById("return").innerText = "Hole-in-one!":
    (strokes <= par -2)? document.getElementById("return").innerText = "Eagle":
    (strokes == par -1)? document.getElementById("return").innerHTML = "Birdie":
    (strokes == par -1)? document.getElementById("return").innerHTML = "Birdie":     
    (strokes == 0)? document.getElementById("return").innerHTML = "":     
    (par == 0)? document.getElementById("return").innerHTML = "":   
    (strokes == par)? document.getElementById("return").innerHTML = "Par":   
    (strokes == par +1)? document.getElementById("return").innerHTML = "Bogey":  
    (strokes == par +2)? document.getElementById("return").innerHTML = "Double Bogey":  
    document.getElementById("return").innerHTML = "Go Home!";   

}