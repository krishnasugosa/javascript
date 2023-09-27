import {PI,getRadius,getAREA ,hiu,math,country,rahman,rizky} from './math_pi.js'
console.log(getAREA(10))
console.log(getRadius(10))
//bagian class👇
const animal = new hiu("shark")
console.log(animal.nama);
//
const kali = new math(5)
kali.sisi = 50
console.log(kali.sisi)
//inheritance
const warga1 = new rahman();
const warga2 = new rizky();
console.log(warga1.negara())
console.log(warga2.negara())
console.log(warga1.hobi())
console.log(warga2.hobi())