let angka = 0;

document.getElementById("Btn").onclick = function(){
    angka -= 1;
    document.getElementById("angka").innerHTML = angka;
}

document.getElementById("Btun").onclick = function(){
    angka = 0;
    document.getElementById("angka").innerHTML = angka;
}


document.getElementById("Btan").onclick = function(){
    angka += 1;
    document.getElementById("angka").innerHTML = angka;
}