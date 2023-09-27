"use strict";
//x = 20;
//ini bakal error karena x tidak di declare
//use strict berguna unutk membatu dimana letak error

var book = {
    name:'joni',
    age:15,
    hobby:"drive"
}

//console.log(Object.keys(book)) //dia akan membungkus layaknya array
//console.log(Object.assign(book)) //dia akan menkategorikan mana string mana number
//console.log(Object.values(book)) //memunculkan isi didalam object dengan dibungkus array
//console.log(Object.entries(book)) // membungkus masing masing dalam array

var ray = [1,0,1,0,1,0]
const newNumbers = ray;

function acak(array){
  array.sort(() => Math.random() - 0.5)
}
acak(newNumbers)
console.log(0, ...newNumbers,1)
//console.log(4,...newNumbers,6) //dengan spread operator kita bisa membuat array menjadi bersatu


//mengacak card
var card = [3,"Q",4,"J",6,7,1,"P","K","Z"];
function shuffleCard(array){
    array.sort(() => Math.random() - 0.5)
  }
shuffleCard(card);
console.log(Object.assign(card))

//recursive javascript
function countDown(num){
    //base case
  if(num <= 0){
    console.log("selesai");
    return;
  }

  //recursive case
  console.log(num)
  countDown(num - 1)
}
countDown(5)

//contoh lain
function factorial(n){
  if(n === 0){
    return 1;
  }

  //recursive case
  return n * factorial(n-1)
}
console.log(factorial(5))
//jadi 5 * 4 *3 *2 *1 = 120 hal ini dikarenakan 5!
//5! = 5 * 4 * 3 * 2 * 1 

//trigonometri
/*
//sin
const angle = Math.PI/4; //sudut 45 derajat dalam radian
const sinValue = Math.sin(angle)
console.log(sinValue)*/
//cos
/*
const angle = Math.PI / 3; // Sudut 60 derajat dalam radian
const cosValue = Math.cos(angle);
console.log(cosValue); // Output: 0.5 (cos(60) = 0.5)*/
//tan
/*
const angle = Math.PI / 6; // Sudut 30 derajat dalam radian
const tanValue = Math.tan(angle);
console.log(tanValue); // Output: 0.5773502691896257 (tan(30) = 0.5773...)*/

// asin
/*
const sinValue = 0.5;
const angle = Math.asin(sinValue);
console.log(angle); // Output: 0.5235987755982989 (asin(0.5) = 30 derajat dalam radian)
*/

//acos
/*
const cosValue = 0.86602540378;
const angle = Math.acos(cosValue);
console.log(angle); // Output: 0.5235987755982989 (acos(0.86602540378) = 60 derajat dalam radian)
*/
//atan
/*
const tanValue = 1;
const angle = Math.atan(tanValue);
console.log(angle); // Output: 0.7853981633974483 (atan(1) = 45 derajat dalam radian)
*/

//calculus
/*
// Menghitung turunan suatu fungsi menggunakan turunan numerik
function derivative(f, x) {
  const h = 0.0001; // Delta x yang sangat kecil
  return (f(x + h) - f(x)) / h;
}

// Contoh fungsi kuadrat
function f(x) {
  return x * x;
}

console.log(derivative(f, 2)); // Output: 4 (turunan f(x) = 2x adalah 4 pada x = 2)
*/

// Menghitung integral suatu fungsi menggunakan metode trapesium
/*
function integrate(f, a, b, n) {
  const h = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x0 = a + i * h;
    const x1 = x0 + h;
    sum += (f(x0) + f(x1)) / 2 * h;
  }
  return sum;
}

// Contoh fungsi linier
function f(x) {
  return 2 * x + 1;
}

console.log(integrate(f, 0, 2, 100)); // Output: 4.010000000000001 (integral f(x) = 2x + 1 adalah 4 pada rentang [0, 2])*/
