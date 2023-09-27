/*let body = document.body;*/
/*
let firstchild = body.firstElementChild;
firstchild.style.backgroundColor = "yellowgreen"
//lastchildnya gak bisa karena lastchildnya adalah script
let lastchild = body.lastElementChild;
console.log(lastchild) //bisa dilihat di console
lastchild.style.backgroundColor = "blueviolet"
*/
//parentelement nya adalah body makanya bodynya yang diubah
/*
let parent = body.parentElement;
parent.style.backgroundColor = "yellowgreen"
*/

//dengan children method kita bisa memilih yang mana akan di select misal constoh dibawah ini
/*
let elementparent = document.querySelector(".sayur")
let parent = elementparent.children[1];
parent.style.backgroundColor = "yellowgreen"
*/
//dengan Array.from(.children) method saya membuat buah memiliki background blueviolet
/*
let elementparent = document.querySelector(".buah")
let selectall = Array.from(elementparent.children);
selectall.forEach(select => select.style.backgroundColor = "blueviolet")
*/
//nextElementSibling method misal saya punya 3 ul di queryselector saya memilih buah maka dia akan meng select ul yang kedua begitu juga seterusnya
/*
let elementparent = document.querySelector(".sayur")
let parent = elementparent.nextElementSibling;
parent.style.backgroundColor = "purple"
*/
//previousElementSibling method sama seperti nextelementsibling cuma ketika saya memilih di query selector yaitu sayur maka dia akan mewarnai yang buah jikalau saya memilih dessert maka dia akan mewarnai sayur
/*
let elementparent = document.querySelector(".sayur")
let parent = elementparent.previousElementSibling;
parent.style.backgroundColor = "purple"
*/
//dengan first element dan last
/*
let elementparent = document.querySelector(".sayur")
let elementchild = elementparent.firstElementChild;
elementchild.style.backgroundColor = "purple"
*/
/*
let elementparent = document.querySelector(".sayur")
let elementchild = elementparent.lastElementChild;
elementchild.style.backgroundColor = "purple"
*/
//cuma lebih gampang memakai children[] method kita bisa hanya dengan index;


//detect keyPress
/*
const box = document.getElementById("box");
window.addEventListener('keydown', move);

let x = 0;
let y = 0;

function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            box.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            box.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            box.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            box.style.left = x + "px";
            break;
        default:
            break;
    }

}
*/
//getcomputestyle
/*
p = document.querySelector("p")
let arral = parseInt(window.getComputedStyle(p).getPropertyValue("font-size")) //parseint membuat string jadi number
console.log(arral) //mencari tahu p brp fontsizenya apa  dengan getPropertValue

let sum = "5.456778"
console.log(parseFloat(sum)) //floating point number berarti dia mengubah point number string menjadi number
*/

