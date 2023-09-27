export let PI = 3.1432;

export function getRadius(radius){
   return 2 *PI * radius;
}

export function getAREA(radius){
   return  3 *radius * radius;
  }
//class
export class hiu{
  constructor(nama){
    this.nama = nama;
  }
}

export class math{
  constructor(sisi) {
    this._sisi = sisi
  }
  get sisi(){
    return this._sisi * this._sisi;
  }
  set sisi(value){
    Math.pow(value,5)
    this._sisi = value
  }
}

//inheritance
export class country{
  negara(){
    return `indonesia`
  }
}

export class rahman extends country{
 hobi(){
  return `berlari`
 }
}

export class rizky extends country{
  hobi(){
   return `berenang`
  }
 }
