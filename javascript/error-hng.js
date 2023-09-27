//error handling
//object dengan deskripsi dari sesuatu yang error
//digunakan jika user salah input
//typeError
//lose conection
//can't open file
// throw = exsekusi  user difined-error
try{
    let x = prompt("enter a number");
    x = Number(x);
    if(isNaN(x)) throw "pls enter a number";
    if(x == "") throw "empty"
    console.log(`${x} is a number`)
     
   }
   catch(error){
      console.log(error)
      }
   
   finally{
      console.warn("🤣⚠️😂⚠️")
   }