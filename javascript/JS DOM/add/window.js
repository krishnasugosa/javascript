/*
let ask = window.prompt("how old are you?")
if(ask < 18){
   window.close()
}else{
    console.log("HI")
}*/

//cookie
//console.log(navigator.cookieEnabled)
/*
document.cookie = "firstName=bob;expires=Sun,1 january 2030 10:00:00 UTC; path=/";
document.cookie = "lastName=sponge;expires=Sun,1 january 2000 10:00:00 UTC; path=/";
console.log(document.cookie)*/
/*
let z = window.prompt("enter cookie")
let x = document.cookie = z;
if(z == ""){
   console.log("eee..later")
}else{
    console.log(x)
}*/

// get cookie 
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

// Fungsi untuk mengatur cookie
/*
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  // Fungsi untuk mendapatkan nilai cookie
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  
  // Fungsi untuk menghapus cookie
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  
  // Contoh penggunaan
  setCookie("username", "john", 7); // Membuat cookie dengan nama "username" dan nilai "John Doe" yang berlaku selama 7 hari
  
  var username = getCookie("username"); // Mendapatkan nilai cookie "username"
  
  console.log(username); // Menampilkan nilai cookie di konsol
  
  deleteCookie("username"); // Menghapus cookie dengan nama "username"*/
  

  //ketika user meninggalkan halaman
  /*
  window.addEventListener('beforeunload', function (event) {
    // Membuat pesan konfirmasi
     event.preventDefault()
     event.returnValue = ''
  })*/

  //print buton
  //jadi dia akan print foto dari halaman
  /*
  let btn = document.querySelector("#Btn");
btn.addEventListener('click',()=>{window.print()})*/