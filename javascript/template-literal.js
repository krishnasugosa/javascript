let nama = "krishna";
let aset = 3;
let kekayaan = 200


let text =
`hello ${nama} <br>
kamu memiliki ${aset} aset, kekayaan mu $${kekayaan}`

document.getElementById("lbel").innerHTML = text;
document.getElementById("lbel").style.color = "red"

//console.log(text)