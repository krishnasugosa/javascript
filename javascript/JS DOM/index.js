// memberi tahu struktur html 👇
//console.log(document)
//memberi tahu seluruh element html👇
//console.dir(document)
//memberi tahu link dari browser👇
//console.log(document.URL)
//sesai nama kita bisa menuju lokasi 👇
//document.location = "https://www.google.com/search?q=google+translate&rlz=1C1UEAD_enID1037ID1037&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQ42NzUwNzY5MzVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
//sesuai nama yaitu kita dapat mengubah title👇
//document.title = "super bro"
/////

//element selector
//Byname
/*
let buah = document.getElementsByName("buah");

buah.forEach(fruit => {
  if(fruit.checked){
    console.log(fruit.value)
  }
})
*/
//Bytagname
/*
let code = document.getElementsByTagName("li");
code[0].style.color = "blue";
code[1].style.color = "red";
code[2].style.color = "gold";
*/
//ByClassName
/*
let dessert = document.getElementsByClassName("dessert");
dessert[0].style.color = "red"
*/
//queryselector //dia hanya mengambil element pertama
/*
let title = document.querySelector("[for]");
title.style.backgroundColor = "red"
*/
//querySelectorAll //mengambil semua element
/*
let all = document.querySelectorAll(".dessert");
all.forEach(semua =>{
    semua.style.color = "blueviolet"
})
*/

