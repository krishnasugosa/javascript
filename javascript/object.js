/*
const animal = {
    nama: "sapi hitam",
    hewan: "sapi",
    jumlah: 4,
    warna: "putih",
   

    susu: function () {
        console.log("menghasilkan susu segar " + this.hewan)
    },
    susu1: function () {
        console.log("susu SGM", "susu ULTRA MILK", "susu BENDERA")
    },
    call() { return "halo ini " + this.nama }
}
console.log(animal.call())
console.log( animal.hewan,animal.jumlah, animal.warna)
animal.susu();
animal.susu1();

//set
const mobil = new Set()
   mobil.add("avanza");
   mobil.add("fortuner");
   mobil.add("karimun");
   mobil.add("pickup");
   //delete the avanza
   mobil.delete("avanza")
console.log(...mobil)

//mengubah global variabel this name
/*
this.name = "hello this is window"
console.log(this)
*/

//class a blue print for creating object
/*
class Player{
   score = 0

   pause(){
    console.log("player paused the games")
   }

   exit(){
    console.log("player exit the game")
   }
}

const player1 =  new Player();
const player2 =  new Player();
const player3 =  new Player();
const player4 =  new Player();

player1.score +=1;
console.log("Score player1 it's " + player1.score)
player1.pause();
//break
player2.score +=2;
console.log("Score player2 it's " + player2.score)
player2.exit();
//break
console.log("Score player3 it's " + player3.score)
player2.exit();
//break
player4.score +=3
console.log("Score player4 it's " + player4.score)
player2.pause();



*/
//constructor
/*
class Student{
   constructor(nama,umur,nilai){
      this.nama = nama;
      this.umur = umur;
      this.nilai = nilai;
   }

   student(nama){
console.log(`${this.nama} sedang belajar`)
   }
}

const student1 = new Student("jamal",30,4.5);
const student2 = new Student("badang",35,1.5);
console.log(student1.nama)
console.log(student1.umur)
console.log(student1.nilai)
student1.student();

console.log(student2.nama)
console.log(student2.umur)
console.log(student2.nilai)
student2.student();
*/

//static keywords
/*
class Mobil {

  static  numberOfCar = 0
    constructor(model){
    this.model = model;
    Mobil.numberOfCar +=1
    }
   static startRace(){
        console.log("3....2....1....GO!")
    }
}
//dia menghitung berapa banyak mobil yang kita punya
const car1 = new Mobil("kijang",);
const car2 = new Mobil("avanza");
const car3 = new Mobil("karimun");
const car4 = new Mobil("inova");

console.log(Mobil.numberOfCar)
 Mobil.startRace();
 

 class nama{
   
  static hello(){
      console.log("hello i am brandon")
   }
 }
 
nama.hello();
*/


//inheritance
//jikalau kita memiliki properti yang sama maka kita bisa membuat class baru,tanpa banyak memanggilnya,istilah nya kita hanya perlu memanggil function yang sama
/*
class hewan{
   hidup = true;

   makan(){
      console.log(`${this.nama} sedang memburu`)
   }
  
   tidur(){
      console.log(`${this.nama} sedang tidur`)
   }
}

class singa extends hewan{
 
   nama = "singa"

   lari(){
      console.log(`${this.nama} sedang berlari`)
   }

}

class elang extends hewan{
   
   nama = "elang"

  terbang(){
      console.log(`${this.nama} sedang terbang`)
   }

}

class hiu extends hewan{

   nama = "hiu"


  berenang(){
      console.log(`${this.nama} sedang berenang`)
   }

}

const Singa = new singa();
const Elang = new elang();
const Hiu = new hiu();

console.log(Hiu.hidup)
Hiu.makan();
Hiu.tidur();
Hiu.berenang();
*/
//super keywords
//mengacu pada kelas orang tua.biasanya digunakan untuk memanggil constructor kelas induk
// istilahnya jikalau didalam properti constructor ada yang sama di berbagai kelas dibutuhkan yang namanya class baru dan berisi constructor dan nama properti yang sama dan dibutuhkan super keywords
/*
class hewan{
  constructor(nama,umur){
  this.nama = nama;
  this.umur = umur;
  }
}

class singa extends hewan{
 
   constructor(nama,umur,runSpeed){
     super(nama,umur);
     this.runSpeed = runSpeed
   }
}

class elang extends hewan{
   constructor(nama,umur,flySpeed){
      super(nama,umur);
      this.flySpeed = flySpeed
    }
   
}

class hiu extends hewan{
   constructor(nama,umur,swimSpeed){
      super(nama,umur);
      this.swimSpeed =swimSpeed
    }
  

}

const hewan1 = new singa("singa",10,70);
const hewan2 = new elang("elang",3,100);
const hewan3 = new hiu("hiu",50,90);

console.log(hewan3.nama)
console.log(hewan3.umur)
console.log(hewan3.swimSpeed)
*/

//get = mengikat properti objek ke fungsi ketika properti itu diakses
//menggunakan get keywords
//berisi underscore karena property dilindungi,jadi jika ingin memanggil harus menggunakan underscore
/*
class Superman{
   constructor(power){
      this._darah = 50
      this._power = power
   }

   get power(){
      return `${this._power}P` 
   }

   get darah(){
      return `${this._darah}H (${this._darah / 50 * 100}%)` 
   }
}

let power1 = new Superman(500);
//jikalau kamu ingin mengubah powernya
//power1._power = 1000000
//
//power1.power = 1000000
//jikalau kita tidak menggunakan underskore maka power tidak akan bisa berubah karena properti nya dilindungi jikalau menggunakan underscrore bisa diubah

console.log(power1.power)
console.log(power1.darah)
*/

//set = mengikat properti objek ke fungsi ketika properti itu diberi nilai
/*
class Superman{
   constructor(power){
      this._darah = 0;
      this._power = power
   }

   get power(){
      return `${this._power}P` 
   }

   get darah(){
      return `${this._darah}H (${this._darah / 50 * 100}%)` 
   }

   set darah(value){  
   if(value > 50){
      value = 50;
   }
   else if(value < 0){
      value = 0;
   }

   this._darah = value;
   }
}

let power1 = new Superman(500);
//jikalau misal orang orang memberi darah kepada superman terlalu berlebihan dan kekurangan itu akan buruk agar tidak terjadi hal tersebut kita harus bermain dnegan set
power1.darah = 50
console.log(power1.power)
console.log(power1.darah)
*/
/*
class fight{
   constructor(superman){
    this.superman = superman;
    this._power1 = 50
   }
   
   get power1(){
    return `${this._power1}P`
   }

set power1(value){
   if(value >= 50){
     value = console.log("you win")
   }else if(value <= 10){
      value = console.log("you lose")
   }
   this._power1 = value;
}

}

const power = new fight("supermanPrime");
console.log(power.superman)
power.power1 = 10
power.power1
*/

//cara meneruskan object ke function sebagai argumen
/*
class mobil{
   constructor(model,tahun,warna){
       this.model = model;
       this.tahun = tahun;
       this.warna = warna;
   }
}
const mobil1 = new mobil("ferrari",2008,"merah");
const mobil2 = new mobil("lambo",2028,"putih");
const mobil3 = new mobil("mustang",2018,"hitam");

Ubahwarna(mobil2, "gold")
displayMobil(mobil2);


function displayMobil(car){
    console.log(car.model);
    console.log(car.tahun);
    console.log(car.warna);
}

function Ubahwarna(car,color){
 car.warna = color;

}
*/
//create an array of object
/*
class mobil{
   constructor(model,tahun,warna){
       this.model = model;
       this.tahun = tahun;
       this.warna = warna;
   }

   drive(){
      console.log(`kamu bisa mengendarai ${this.model} di tahun ${this.tahun} dengan warna ${this.warna}`)
   }

}
const mobil1 = new mobil("ferrari",2008,"merah");
const mobil2 = new mobil("lambo",2028,"putih");
const mobil3 = new mobil("mustang",2018,"hitam");

const cars = [mobil1,mobil2,mobil3];
//console.log(cars[0])
//console.log(cars[1])
//console.log(cars[2])
//cars[0].drive();
//cars[1].drive();
//cars[2].drive();

startRace(cars);
function startRace(cars){
  for(const car of cars){
     car.drive();
  }
}
*/

//basic constructor again
/*
class hitung{
   constructor(width){
    this._width = width;
    this._height = width;
   }

   get width(){
       return this._width * this._height
   }

   set width(value){
      value = Math.floor(Math.ceil(value))
      this._width = value;
   }
}

const hasil = new hitung(2)
hasil.width = 100
console.log(hasil.width)
*/


//anonymous object = object without  a name
/*
class card{
   constructor(value,suit){
      this.value = value;
      this.suit = suit;
   }
}

let arr = [
  new card("A"," hati"),
  new card("A"," kriting"),
  new card("A"," wajik"),
  new card("A"," daun"),
  new card("2"," hati"),
  new card("2"," kriting"),
  new card("2"," wajik"),
  new card("2"," daun"),
]

console.log(arr[5].value + arr[3].suit)
//arr.forEach(ray => console.log(`${ray.value} ${ray.suit}`));

/*for(let i = 0; i < arr.length; i++){
   console.log(arr)
}*/

/*for(let card of arr){
   console.log(card)
}*/

//jikalau menggunakan for in dia akan menghasilkan berapa banyak value yang ada di dalam array
/*for(let card in arr){
    console.log(card)
}*/

//another static again
/*
class superman{
    
 static TotalPower = 0
  constructor(model){
   this.model = model
 superman.TotalPower +=1

   }
   static fly(){
      console.log(`all superman is fly `)
   }
}

let result = [
 new superman("superman"),
 new superman("supermanPrime"),
 new superman("superman2099"),
 new superman("superman1000")
]
console.log(`total superman is ${superman.TotalPower}`)
superman.fly()
*/

//object with spread operator
/*
let barang1 = {baju1:"t-shirt",celana1:"pants",sepatu1:"shoes"}
let barang2 = {baju2:"shirt",celana2:"short",sepatu2:"boots"}

const Semua = {...barang1,...barang2};
console.log(Semua)
*/

/*
hewan = [
   { type: 'dog', name: "hipzy" },
   { type: 'cat', name: "tommy" },
   { type: 'bird', name: "pipiz" }
]

let pet = hewan.find(pet => pet.type === 'dog' && pet.name === "hipzy")
console.log(pet)*/

/*
let animal = new Set();
animal.add("🐷")
animal.add("😼")
animal.add("🐶")
animal.add("🙈")


console.log(animal.has("😍"))*/

//mengacak
animal = [
   { type: 'dog', name: "hipzy" },
   { type: 'cat', name: "tommy" },
   { type: 'bird', name: "pipiz" }
]

animal.sort( () => Math.random() -  0.5 )
console.log(animal)
const a = {
   test : {t : "🙈🙈"}
}
//deep clone 👇
const b = a //structuredClone for not clone //structuredClone(a)
b.test.t = "🐶🐶"
console.log(a.test.t)
console.log(b.test.t)

//how to get all key in object
let NameOfMan = {
   'bob': true,
   'marin':false,
   'karen':true
}

 const objct =  Object.keys(NameOfMan)
 .map(name => ({
   name
 }))
console.log(objct)

//compiler speak

var students = [
   {name:'kaka',id:4501,country:'indonesia'},
   {name:'fari',id:4602,country:'india'},
   {name:'adit',id:4703,country:'brazil'},
   {name:'rada',id:4804,country:'america'},
]
//menggunakan prompt dan alert
function getStudentName(){
let inputId = prompt("enter your ID")
  for(let student of students){
     if(student.id == inputId){
        return student.name;
     }
     
  }
  return null;
}
let studentName = getStudentName();

if (studentName) {
  alert("Student name: " + studentName);
} else {
  alert("Invalid ID. Refreshing the page.");
  location.reload();
}

//dipanggil biasa dengan console 👇
/*
function getStudentName(StudentID){
   for(let student of students){
      if(student.id == StudentID){
         return student.name;
      }
   }
 }*/

function getStudentCountry(countryId){
   for(let student of students){
      if(student.name == countryId){
        return student.country;
      }
   }
}

/*
var nextStudent = getStudentName(4602);
var  StudentCountry= getStudentCountry('rada'); //karena namanya berupa string jadi kita panggil dengan string
console.log(nextStudent) //fari
console.log(StudentCountry)//america
*/
var alat = [
   {type:'besi',nama:'obeng'},
   {type:'perak',nama:'sendok'},
   {type:'besi',nama:'palu'},
   {type:'perak',nama:'garpu'},
]
const cari = alat.some(print => print.type === 'besi'); //true karena didalam type ada besi
//const cari = alat.some(print => print.nama === 'besi'); //false karena didalam nama tidak ada besi
console.log(cari)


// Membuat objek hashmap
var hashmap = {};

// Menambahkan data ke hashmap
hashmap["kunci1"] = "nilai1";
hashmap["kunci2"] = "nilai2";
hashmap["kunci3"] = "nilai3";

// Mengakses nilai berdasarkan kunci
console.log(hashmap["kunci1"]); // Output: "nilai1"
console.log(hashmap["kunci2"]); // Output: "nilai2"

// Menghapus data dari hashmap
delete hashmap["kunci3"];

// Memeriksa apakah kunci ada dalam hashmap
console.log("kunci1" in hashmap); // Output: true
console.log("kunci3" in hashmap); // Output: false

// Menghitung jumlah elemen dalam hashmap
var jumlahElemen = Object.keys(hashmap).length;
console.log(jumlahElemen); // Output: 2

// Iterasi melalui elemen-elemen dalam hashmap
for (var kunci in hashmap) {
  console.log(kunci + ": " + hashmap[kunci]);
}
// Output:
// kunci1: nilai1
// kunci2: nilai2

//Polymorphism
class Shape {
   calculateArea() {
     // Implementasi default
     console.log("Menghitung luas bentuk...");
   }
 }
 
 class Rectangle extends Shape {
   calculateArea() {
     // Implementasi untuk persegi panjang
     console.log("Menghitung luas persegi panjang...");
   }
 }
 
 class Circle extends Shape {
   calculateArea() {
     // Implementasi untuk lingkaran
     console.log("Menghitung luas lingkaran...");
   }
 }
 
 // Membuat objek-objek dari kelas-kelas tersebut
 const shape = new Shape();
 const rectangle = new Rectangle();
 const circle = new Circle();
 
 // Memanggil metode calculateArea()
 shape.calculateArea(); // Output: Menghitung luas bentuk...
 rectangle.calculateArea(); // Output: Menghitung luas persegi panjang...
 circle.calculateArea(); // Output: Menghitung luas lingkaran...

 //Encapsulation
 class Person {
   constructor(name, age) {
     this._name = name; // properti dengan akses "protected"
     this._age = age; // properti dengan akses "protected"
   }
 
   // metode dengan akses "public"
   getName() {
     return this._name;
   }
 
   setName(newName) {
     this._name = newName;
   }
 
   // metode dengan akses "private"
   _getAge() {
     return this._age;
   }
 
   _setAge(newAge) {
     this._age = newAge;
   }
 }
 
 const person = new Person("John Doe", 25);
 
 console.log(person.getName()); // Output: John Doe
 person.setName("Jane Smith");
 console.log(person.getName()); // Output: Jane Smith
 
 console.log(person._getAge()); // Output: Error - Metode private tidak dapat diakses
 person._setAge(30); // Output: Error - Metode private tidak dapat diakses

 ////////////////////
 class TreeNode {
   constructor(data) {
     this.data = data;
     this.children = []; // Array untuk menyimpan simpul-simpul anak dari simpul ini
   }
 
   addChild(childNode) {
     this.children.push(childNode);
   }
 }
 
 // Membangun tree dengan beberapa simpul
 const root = new TreeNode('A');
 const childB = new TreeNode('B');
 const childC = new TreeNode('C');
 const childD = new TreeNode('D');
 
 root.addChild(childB);
 root.addChild(childC);
 childB.addChild(childD);
 
 console.log(root);