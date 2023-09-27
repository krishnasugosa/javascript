/*
let nama = ['agus','fikri','jamal']
nama.push('ahmad','reza')
//menambahkan yang awal
//nama.unshift('manggo')
//menghapus yang awal
//nama.shift()

//menghapus yang akhir
//nama.pop()

//alert
console.log(nama)

//contoh lain
let namaGuru = []

namaGuru[0] = 'rahman'
namaGuru[1] = 'fahrizal'

console.log(namaGuru)

let sayur = ['bayam','kangkung','sawi']

let buah = ['pisang','kiwi','semangka']
//concat untuk menggabungkan 2 variabel
console.log(sayur.concat(buah))

console.log(sayur.join(","))

let angka = [
    1,2,3,
    4,5,6
]

console.log(angka.join("-   "))
*/

let so = "SOS"
console.log(so.split(""))

//map method array
/*
let numbers = [1,2,3,4,5]
let hasils = numbers.map(hasil)
let cubes = numbers.map(cube)

cubes.forEach(print);

function hasil(element){
return  Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}

function print(element){
console.log(element)
}
*/
//array filter
/*
let umur = [18,16,17,21,60,15,14]
let dewasa = umur.filter(checkUmur);
let anakAnak = umur.filter(dibawahUmur)


anakAnak.forEach(print);


function checkUmur(element){
  return element >= 18 ;
}

function dibawahUmur(element){
    return element <= 17;
  }

function print(element){
console.log(element)
}
*/
/*
const satu = ["jamal","fikri","haris"]
const dua = ["reza","adit","ahmad"]

console.log(...satu,...dua)
*/

//array reduce
/*
let harga = [1000,2000,5000,3000]
let total = harga.reduce(checkHarga);
console.log(`total belanja adalah ${total}`)

function checkHarga(total,element){
    return total + element
}

//contoh lain
let nilai_kelas_k = [80,70,65,90,100];
let total = nilai_kelas_k.reduce(totalNilai); 
console.log(`total nilai anak kelas k adalah sebanyak ${total}`)

function totalNilai(total,element){
 return total + element;
}

//contoh lain
const barang = ["kaos-kaki: 75$","sepatu: 100$","baju 200$"];
 let harga = [75,100,200];
 let total = harga.reduce(checkHarga)
console.log(...barang)
console.log(`total belanja ${total}$`)
 function checkHarga(x,y){
  return x + y
 }

*/
/*
//sort an array of number
let nilai = [80,70,65,90,100];
nilai = nilai.sort(menurunSort);
nilai.forEach(print);

//yang nilai terkecil akan diatas yang nilai terbesar akan dibawah
function menurunSort(x,y){
    return x - y
}
//sebaliknya
function naikSort(x,y){
    return y - x;
}

function print(element){
    console.log(element)
    }
    */

/*
const namaHewan = ["ayam","babi","bebek"]
for(let i = 0; i < namaHewan.length; i++){
 console.log(`nama-nama hewan: ${namaHewan[i]} `)
}
    */
/*
for( let i = 0; i < 1000; i++){
 console.log("dont give up")
}
let quot =["dont give up"]
for(let i = 0; i < 100; i++){
console.log(quot)
}
*/

//shuffle  an array
/*
let kartu = ["A", "2",  "3", "4" ,"5", "K","7","j"]
shuffle(kartu);
kartu.forEach(kartu => console.log(kartu))

function shuffle(array){
  let currenIndex = array.length

  while(currenIndex != 0 ){
     let RandomIndex = Math.floor(Math.random () * array.length)
     currenIndex -=1;

     let temp = array[currenIndex];
     array[currenIndex] = array[RandomIndex];
     array[RandomIndex] - temp;
  }
  return array;
}
*/
//map
//objek yang menyimpan pasangan nilai kunci dari tipe data apapun
/*
const toko = new Map([
    
    ["baju", 20],
    ["celana", 60],
    ["sepatu", 40],
    ["cawet", 50],

]);

let kartuBelanja = 0;
kartuBelanja += toko.get("celana");

console.log(kartuBelanja)
//toko.set("hat",40);
//toko.delete("hat",40);
//console.log(toko.has("sepatu"));
//console.log(toko.size)

toko.forEach((harga, barang) => console.log(`${barang} $${harga}`))
*/


let fruit1 = ["jeruk","semangka","apel"];
let fruit2 = ["anggur","pisang","nanas"];

const AllFruit = [...fruit1,...fruit2];

console.log(...AllFruit);


let p = ["🦸","⏲️","😍"].reverse()
console.log(p)

//joining array
let num1 = [1,2,3,4]
let num2 = [5,6,7,8].concat(num1)
console.log(num2)

//clone array
let num4 = [1,2,3,4]
//menghapus index didalam array menggunakan splice 👇
//let arr2 = num4.splice(2)
//cloning 👇
let arr2 = num4.slice()
console.log(arr2)

//console like index of array
var str = ['😼','🐷','🐶','🙈'].reverse()
let x = 0;
let y = 0
for(let i of str){
   x = x + 1;
   y = y + 1;
console.log(x,i,y);
console.info("Super Prime")
}

//acak array
let arr = [
    "halo",
    "gmn",
    "kapan",
    "bagaimana"
 ]
 
 let acak = Math.floor(Math.random() * arr.length)
 
 console.log(arr[acak])

 //filter array object
 let peserta = [
   {
    player:"ronaldo",
    age : 38
   },
   {
    player:"halland",
    age : 22
   },
   {
    player:"mbappe",
    age : 23
   },
   {
    player:"messi",
    age : 36
   }
 ]
//dibacanya peserta manakah yang umurnya dibawah 30
console.table(peserta.filter(peserta => peserta.age < 30))


//shuffle  array
let nama = ["jack","roger","karen","rodrick"];
shuffle(nama);

function shuffle(array){
 let shuffleArray = [];
 let usedIndex = [];
 let i = 0;
 while(i < array.length){
let RandomIndex = Math.floor(Math.random() * array.length);
if(!usedIndex.includes(RandomIndex)){
  shuffleArray.push(array[RandomIndex]);
  usedIndex.push(RandomIndex);
  i++
}
 }
 console.log(shuffleArray)
 return shuffleArray;

}
//mengacak array
let angka = ["🐶","🙈","😼","🐷"];
function mengacak(array){
   array.sort(() => Math.random() - 0.5)
}
mengacak(angka)
console.log(angka)

//includes method
let array = [1,2,3,4,5];
console.log(array.includes(4)) //true
console.log(array.includes(6)) //false


//charAt short
let w = new Array()
w = "hello world"[0]
console.log(w)

//how to empty array
/*
let idkkk = [1,2,3,4]
idkkk = []
console.log(idkkk)*/
// cara kedua 
/*
let idkkk = [1,2,3,4]
idkkk.length = 0
console.log(idkkk)*/


//find duplicat number
function findDuplicates(arr) {
  var duplicates = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (duplicates[arr[i]] === undefined) {
      duplicates[arr[i]] = 1;
    } else {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

var numbers = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 1];
var duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 3, 1]


//destrucing array
let colors = ["red","blue","yellow"]

let color1 = colors[0]
let color2 = colors[1]
let color3 = colors[2]

let = [color1,color2,color3] = colors
console.log(color1)

//3D array
const array3D = [
  [
  [1,2,3],
  [3,4,5],
  [6,7,8]
  ],
  [
    [10,11,12],
    [13,14,15],
    [16,17,18]
  ],
  [
    [19,20,21],
    [22,23,24],
    [25,26,27]
  ]
]

console.log(array3D[2][1][2])

//graph
const graph = {
  A:['B','C'],
  B:['A','D'],
  C:['A','D'],
  D:['B','C'],
}
console.log(graph['B'])
console.log(graph['D'])



//simpel fast condition true false
let mood = true
function greet(){
console.log("hello world")
}
//dia bakal running code ini jika true
mood && greet()