/*
const NameTag = document.createElement("strong")
NameTag.textContent = window.prompt("enter your name");
document.body.append(NameTag)*/

let buah = document.querySelector(".buah")
const buah1 = document.createElement("li")
buah1.textContent = "mango"
//buah.append(buah1) //append membuat text berada di awal
//buah.prepend(buah1) //prepend membuat text berada di akhir
buah.insertBefore(buah1,buah.getElementsByTagName("li")[2]) //jikalau kita ingin menempatkannya di index manapun


//add/change css property
let title = document.querySelector(".title");
title.style.backgroundColor = "black"
title.style.color = "blue"
title.style.width = "200px"
title.style.height = "50px"
title.style.textAlign = "center"
title.style.border = "2px solid blue"
title.style.padding = "20px"
title.style.display = "block"
title.style.fontFamily = "consolas"