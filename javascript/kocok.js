let x;
let y;
let z;

document.getElementById("Btn").onclick = function(){
    
    x = Math.floor(Math.random () * 7);
    y = Math.floor(Math.random () * 7);
    z = Math.floor(Math.random () * 7);

    document.getElementById("text1").innerHTML = x;
    document.getElementById("text2").innerHTML = y;
    document.getElementById("text3").innerHTML = z;

}