//synchronous code = step by step instruksi linear(start now,finish now)
/*
console.log("mulai")
console.log("this is synchronous")
console.log("akhir")


//asynchronous code = keluar dari sequen etc. accesses the database,taks that take time (start now,finish sometime later)
console.log("mulai")
setTimeout(() => console.log("this is asynchronous"),5000)
console.log("akhir")
*/
//////////
//console.time() = digunakan untuk ngetrack seberapa lama operation(seberapa lama program dijalankan)
//time method dan timeEnd method akan ngetrack seberapa lama synchronous
/*
console.time("responsive timer")
setTimeout(() => console.log("timer end"),3000)
console.timeEnd("responsive timer")
*/

//promise = seperti namanya dia akan berjanji untuk mengembalikan sesuatu di dalam future
//merupakan object yang merangkum hasil dari asynchronous operation
//dia membiarkan asynchronous method mengembalikan value  kayak synchronous method
/*
const tunggu = new Promise((output) =>{
   setTimeout(output,5000)
});
tunggu.then(() => console.log("terimakasih sudah menunggu") )


const wait = waktu => new Promise((output) =>{
    setTimeout(output,waktu)
 });
 wait(3000).then(() => console.log("terimakasih sudah menunggu") )

let upload = new Promise((resolve,reject) =>{
    let fileUpload = false
    if(fileUpload){
         resolve("file di upload")
    }else{
        reject("file tidak di upload")
    }
});

 upload.then((output) => console.log(output)).catch((error) => console.log(error))


const waktu = new Promise(function(output){
  setTimeout(output,5000)
 
});
waktu.then(() => console.warn("warning to much code"))

//contoh lain
const pedagang = new Promise((bayar,kabur) =>{
   kita = false;
    if(kita){
        bayar("TERIMA KASIH SUDAH MEMBAYAR")
    }else{
        kabur("KAMU AKAN SEGERA DI PENJARA")
    }
})

pedagang.then((output) => console.log(output)).catch((warn) => console.warn(warn))
*/
//async = make a function return to promise
/*async function warung(){
    penjagaWarung = false;
   if(penjagaWarung){
   return "kamu bayar";
   }else{
   throw "kamu kabur";
   }

} 

warung().then((output) => console.log(output)).catch((output) => console.log(output))*/
////////////////
// await = make an async function wait for a promise (dengan await function kita tidak perlu then keywords dan catch keywords)
async function warung(){
    penjagaWarung = false;
   if(penjagaWarung){
   return "kamu bayar";
   }else{
   throw"kamu kabur";
   }

} 
async function pemberitahuan(){
try{
    let pesan = await warung();
    console.log(pesan)
}catch(error){
    console.log(error)
}
}
pemberitahuan();


async function timer(name){
    name = "halo dek"
   setTimeout(function(){
    document.write("this is warning⚠️")
   },3000)
   
}
async function habis(){
     await timer();
}
habis();


async function timer(){
    await new Promise(resolve => {
       setTimeout(function(){
          console.log("hello")
          resolve()
      
       },3000)
    })
    console.log("world")
 }
 timer()

 /*
 async function statusPeople(){
   await new Promise(print => {
    class status{
        constructor(name,age,country){
          this.name = name;
          this.age = age;
          this.country = country;
        }
    }
    print(console.log(new status("paza",43,"indonesia")))
   })
}
statusPeople()*/
//promise.all method
/*
let p1 = new Promise((resolve,reject) =>{
   setTimeout(() => resolve("Resolve P1"),1000)
})
let p2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Resolve P2"),2000)
 })
 let p3 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Resolve P3"),3000)
 })

Promise.all([p1,p2,p3]).then((values) => console.log(values)).catch((error) => console.log(error.massage))*/

//Promise.allSettled method
/*
let p1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Resolve P1"),1000)
 })
 let p2 = new Promise((resolve,reject) =>{
     setTimeout(() => reject(new Error("Resolve P2")),2000)
  })
  let p3 = new Promise((resolve,reject) =>{
     setTimeout(() => resolve("Resolve P3"),3000)
  })
 
 Promise.allSettled([p1,p2,p3]).then((values) => console.log(values)).catch((error) => console.log(error.massage))*/

 // Promise.race method
 let p1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Resolve P1"),1000)
 })
 let p2 = new Promise((resolve,reject) =>{
     setTimeout(() => reject(new Error("Resolve P2")),2000)
  })
  let p3 = new Promise((resolve,reject) =>{
     setTimeout(() => resolve("Resolve P3"),500)//return first promise if first promise reject return error
  })
 
 Promise.race([p1,p2,p3]).then((values) => console.log(values)).catch((error) => console.log(error.massage))