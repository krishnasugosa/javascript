//menjalankan();
//function menjalankan(){
//let username = "krishna"
//let hobby = "coding"
//let usia = 15

//HappyBoy(username,hobby,usia);
//}


//function HappyBoy(username,hobby,usia){
// console.log("happyBoy " + username)
// console.log("happyBoy " + usia)
// console.log("happyBoy " + hobby)
//}

//contoh kedua

//document.getElementById("Btn").onclick = function(){
//   document.getElementById("h1MY").innerHTML = "halo dunia"

//}
/*
jalankan();
function jalankan(){
    let nama = "krishna"
    let usia = 15


    happyBirthday(nama,usia);
}

function happyBirthday(nama,usia){
    console.log("happy birthday " + nama)
    console.log("kamu berusia " + usia) 
    console.log("happy birthday")
}
    
*/

//callback
/*
let total = sum(4,5);
//displayConsole(total)
displayDOM(total)

function sum(x,y){
   let result = x + y
  return result;
}

function displayConsole(output){
   console.log(output);
}

function displayDOM(output){
 document.getElementById("lbel").innerHTML = output
 }

 */
///////////////
/*
sum(3,4,displayConsole);

function sum(x,y,memanggil){
    let total = x + y;
    memanggil(total);
 }
 
 
 function displayConsole(output){
    console.log(output);
 }
 
 
 function displayDOM(output){
  document.getElementById("lbel").innerHTML = output
  }
  */

/*
  num("win",displayConsole);

  function num(x,callback){
   let win = "you win"
   let lose = "you lose"
    if(x == "win"){
       callback(win)
    }
    else if(x == "lose"){
      callback(lose)
    }
  }


function displayConsole(output){
    console.log(output);
 }
 */

 //function expresion
 /*
 const salam = function(){
   console.log("hello")
 }
 salam();
 */
//arrow function
/*
const greet = (user) => console.log("halo ini "+ user)
greet("bro");

let persen = (x,y) => x / y * 100
console.log(`the result is: ${persen(3,5)}%`)

 let halo = () => {return "hallo apa kabar"}
 console.log(halo())

 let luasPersegi = (sisi) => {return sisi * sisi}
 console.log("luas persegi: " + luasPersegi(10))

 let luasPersegiPanjang = (p,l,t) => {return p * l * t}
 console.log("luas persegi panjang: " + luasPersegiPanjang(10,20,30))

 let nilai = [100,50,60,70,80]

 nilai.sort((x,y) => x - y);
 nilai.forEach((element) => console.log(element));
 */

 //nested function
 /*
 let nama = "krishna"
 let pesan = 0
login();

 function login(){
displayUsername();
displaypesan();
  function displayUsername(){
console.log(`hello ${nama}`)
  }
  function displaypesan(){
    console.log(`you have ${pesan} massage in your console`)
  }
 }
 */
//method

var hari = {
  "namahari" : "senin",
  "namabulan" : "agustus",
 "waktu":function(){
  var d = new Date();
var jam = d.getHours();

switch(true){
  case jam >= 6 && jam < 12:
 return("pagi hari")
  break
  case jam >= 12 && jam < 18:
  return("sore hari")
  break
  case jam >= 18 && jam < 24:
  return("malam hari")
  break
  default:
    jam = "waktu tidak tersedia"
    break
}

 }
};
console.log(hari.waktu());

//anonymous function
/*
let great = function(nama){
  console.log(`${nama}`)
}

great("hello")

//contoh lain
let hitung = function(sisi){
  return sisi * sisi
}

console.log(hitung(4,4))
*/



