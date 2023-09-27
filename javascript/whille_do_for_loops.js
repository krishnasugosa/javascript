//while loops
/*
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("enter your name");
  
}
console.log("hello ",userName)
*/

//infiniti loops
/*
while(1==1){
    console.log("this infiniti")
}
*/


//do while loops
/*
let username;
do{
   username = window.prompt("enter your name")
}while(username == "" )
console.log("heloo ",username)
*/


//for loops
/*
for(let i = 1; i <= 10;  i +=1 ){
    console.log(i)
}
*/
//jikalau kit MEMBUAT hitungan nya menjadi mundur
/*
for(let i = 10; i > 0; i -=3){
   console.log(i)
}
console.log("peluncuran roket")
*/

//for loops of array
/*
const nama = ["fajri","ahmad","yanto","saipul"]

for(let i = 0; i < nama.length; i +=1){
    console.log(nama[i])
}
 */


//break and continue statmen
//contoh break
/*
for(let i = 0; i <= 20; i+=1){
    if(i == 13){
        break;
    }
    console.log(i)
}
*/
//contoh continue
/*
for(let i = 0; i <= 20; i+=1){
    if(i == 13){
        continue;
    }
    console.log(i)
}
*/

//nested loops
/*
let symbol = window.prompt("masukkan simbol");
let rows = window.prompt("masukkan #rows ");
let colom = window.prompt("masukkan colom");
 


for (let i = 1; i <= rows; i+= 1) {
    for (let n = 1; n <= colom; n+= 1) {
        document.getElementById("lbel").innerHTML += symbol;
    }
    document.getElementById("lbel").innerHTML += "<br>" ;
}
*/


//array loops
/*
let hewan = [
    'kucing',
    'anjing',
    'kelinci',
    'tikus',
    'landak',
    'beruang',
    'zebra',
    'unta',
]

for(let i = 0; i < hewan.length; i++){
    console.log("Nama-Nama Hewan: " + hewan[i])
}
*/

/*
let hitungMundur = [
    1,
    2,
    3,
    4,
    5,
]
for(let i = hitungMundur.length - 1; i >= 0; i-=1){
console.log("roket meluncur dalam hitungan: " + hitungMundur[i])
}
*/

/*
let angka = [1,2,3,4,5,6,7,8,9,10];

for(let angkas of angka){
console.log(angkas)
}
*/
/*
let angka = [1,2,3,4,5,6,7,8,9,10];

for(let i of angka){
console.log(i)
}
*/
/*
let angka = ['banana','apel','kiwi','manggo'];
//masing masing menjadi terbalik
//angka.sort();

//membuat menjadi terbalik
angka.sort().reverse();

for(let angka1 of angka){
console.log(angka1)
}
*/

//2D array
/*
let buah = ['pisang','jeruk','anggur','apel']
let sayur = ['sawi','bayam','toge']
let daging = ['ayam','sapi','ikan']



gizi = [buah,sayur,daging]
gizi [0][3] = 'pepaya'
gizi.reverse();

//nested loop
for(let list of gizi){
for(let makanan of list){
    console.log(makanan)
}
}
*/

//spread operator
/*
let number = [1,2,3,4,5,6,7,8,9,10];

let maximum = Math.min(...number); 
console.log(maximum)
//

let kelas1 = ['jamal','fikri','aldi'];
let kelas2 = ['anji','rusdi','farhan']
//kelas1.push(...kelas2)
//console.log(...kelas1)
console.log(...kelas1.concat(...kelas2))
*/


//rest parameter
/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d,e))

function sum(...numbers){
  let total = 0;
   for(let number of numbers){
    total += number
   
   }
   return total;
}
*/

//for each array
/*
let murid = ['jamal', 'adit', 'sopo']
murid.forEach(kapital);
murid.forEach(print);

function kapital(element, index, array) {
    //array[index] = element[3].toUpperCase() + element.substring(2)
    array[index] = element[0].toUpperCase() + element.substring(1)


}

function print(element) {
    console.log(element)
}

*/

let mobil = [
    ["kijang","inova","avanza"],
    ["pickup","karimun","mitsubishi"],
    ["ferrari","lamborgini","merchedes"],
  ]
 
 for(let i = 0; i < mobil.length; i++){
    for(let j = 0; j < mobil.length; j++){
       //dengan menambahkan varibael i dan j didepan maka akan menciptakan koordinat yang berada di array
       console.log(i,j,mobil[i][j])
    }
 }
 //jumping loops
 for(let i = 0; i < 4; i++){
   if(i === 3){
     continue;
   }
   console.log(i)
 }
 
    



