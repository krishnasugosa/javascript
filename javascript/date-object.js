//date object digunakan untuk kerja hari dan waktu
//let date = new Date();
//let date = new Date(0);
//contoh date construktor
//let date = new Date(2023,2,4,5,3,12,100);
//let date = new Date("2023","2","3","5","3","12","100");

//let date = new Date();
/*
 date.setFullYear(2024);
 date.setMonth(4)
 date.setDate(3)
 date.setHours(15)
 date.setMinutes(12)
 date.getSeconds(50)
 */
/*
document.getElementById('lbel').innerHTML = hoursName(date);

function dateName(date) {
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay();

    return `${month}/${day}/${year}`
}

function hoursName(date) {
    hour = date.getHours();
    minutes = date.getMinutes();
    second = date.getSeconds();
    amORpm = hour >= 12 ? "PM" : "AM"
    // mengubah jam menjadi standar 👇
    hour = (hour % 12) || 12
    return `${hour}:${minutes}:${second}${amORpm}`
    
}

*/
/*
const labelKu = document.getElementById("lbel")

Update();
setInterval(Update,1000)

function Update(){
    let date = new Date();
    labelKu.innerHTML = hoursName(date);

    function hoursName(date) {
        hour = date.getHours();
        minutes = date.getMinutes();
        second = date.getSeconds();
        amORpm = hour >= 12 ? "PM" : "AM"
        hour = (hour % 12) || 12
        hour = tulisan0(hour)
        minutes = tulisan0(minutes)
       second = tulisan0(second)
        return `${hour}:${minutes}:${second}${amORpm}`
        
    }
    function tulisan0(time){
      time = time.toLocaleString()
       return time.length < 2 ? "0" + time : time;
    }
}
*/
/*
var hari = {
  "waktu":function(){
    let d = new Date()
    let jam = d.getHours();

    if(jam >= 6 && jam < 12){
        return "pagi hari"
    }
    else if(jam >= 12 && jam <= 18){
        return "sore hari"
      }
      else if(jam >= 18 && jam <= 24 ){
        return "malam hari"
      }
}
}
console.log(hari.waktu())*/

var date = new Date()
let jam = date.getHours()
if(jam >= 6 && jam < 12){
   console.log("pagi hari")
}else if(jam >= 12 && jam <= 18){
  console.log("sore hari")
}else if(jam >= 18 && jam <= 24 ){
  console.log("malam hari")
}









