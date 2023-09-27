let a;
let b;
let c;

document.getElementById("Btn").onclick = function(){
    a = document.getElementById("Text1").value;
    a = Number(a);

    b = document.getElementById("Text2").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
     document.getElementById("label").innerHTML = "bagian c " + c;
}