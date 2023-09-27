//setInterval() = memanggil function repeatly after number of a milisecond

let count = 0;

let max = prompt("enter the number");
max = Number(max);

const TImerku = setInterval(countUp,1000);


function countUp(){
    count +=1
    if(count >= max){
     clearInterval(TImerku);
    }
   alert(count);
   console.log(count);
}



//anonymous
/*
setInterval(function(){
  alert("hello world")
},1000)*/

