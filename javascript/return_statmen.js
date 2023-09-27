/*
let area;
let width;
let height;

width = window.prompt("your width")
height = window.prompt("your height")

area = getarea(width,height);
console.log("the area is ",area);

function getarea(width,height){
     return width * height;
}
*/

//tennary operator
/*

let dewasa = checkAge(21);
  console.log(dewasa)
function checkAge(umur){
   if(umur >= 18){
     return true;
   }else{
     return false;
   }
}
*/
//ekspresion
/*
 checkWin(true);
function checkWin(win){
  win ? console.log("you win"):console.log("you lose")
}
*/
//contoh lain
/*
checkumur(18);
 function checkumur(umur){
   return umur >= 18 ? console.log("kamu dewasa"):console.log("kamu masih kecil")
}
*/

/*
function LuasPersegiEmpat(sisi,lebar){
     return sisi *lebar;
     
}
console.log("Luas : " + LuasPersegiEmpat(4, 5))                                                                                

*/

/*
function LuasPersegiEmpat(sisi,lebar){
    if(typeof sisi == "string"){
        //kalau menggunakan string maka dia akan menghasilkan ini
        return "argumen harus berupa angka"
    }
    else if(typeof lebar == "string"){
        return "argumen harus berupa angka"
    }
    //kalo tidak dia akan menghasilkan penjumlahannya
    return sisi * lebar
}
console.log("LuasPersegiempat : " + LuasPersegiEmpat(5,5))

*/


/*

function perhitungan(a, b) {
    if (typeof a == "string") {
        return "argumen harus berupa angka"
    }
    else if (typeof b == "string") {
        return "argumen harus berupa angka"
    }
    return Math.floor(a - 3 * b + 2)

}
console.log("hasil perhitungannya adalah: ", perhitungan(5,8))

*/