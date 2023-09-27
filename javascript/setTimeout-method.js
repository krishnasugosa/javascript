// setTimeout = setTimeout();
//clearTimeout = clearTimeout(identifi)

let z = setTimeout(waktu1,3000,"krishna",15);
let x = setTimeout(waktu2,6000,"krishna");
//clearTimeout(z); sesuai namanya dia mengclear waktu


function waktu1(nama,age){
    alert(`jangan menunda ${nama} umur mu sudah ${age}`)
}

function waktu2(nama){
    alert(`lakuan sekarang ${nama}🦸`)
}

//anonymouse
setTimeout(function(){
   alert("here we go again")
},9000);

// exampel
setTimeout(function(){
    document.getElementById("lbel").innerHTML = "hello world"
},3000)


