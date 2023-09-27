const Mydiv = document.querySelector("#box");
const MyBtn = document.querySelector("#Btn");

MyBtn.addEventListener('click',animationStart)

/*
function animationStart(){
    let timetd = null;
    let x = 0;
    let y = 0;
    timetd = setInterval(timer,5);

    function timer(){
       if(x >= 200 || y >= 200){
        clearInterval(timetd)
       }else{
        x+=1;
        y+=1;
        Mydiv.style.left = x + "px";
        Mydiv.style.top = y + "px";
        //Mydiv.style.marginLeft = x + "px"; //kalo semisal gak pakek position relative pakek margin juga bisa
       }
    }
}*/


function animationStart(){
    let timetd = null;
    //let decrease = 0;
    let scaleX = 1;
    let scaleY = 1;
    //let x = 0;
    //let y = 0;
    timetd = setInterval(timer,5);

    function timer(){
       if( scaleX <= 0.1 || scaleY <=0.1 ){
        clearInterval(timetd)
       }else{
        scaleX -= 0.01;
        scaleY -= 0.01;
        Mydiv.style.transform = "scale("+scaleX+","+scaleY+")"

        //x+=1;
        //y+=1;
       //Mydiv.style.transform = "rotateX("+ decrease + "deg)"; //balik atas
       // Mydiv.style.transform = "rotateY("+ decrease + "deg)"; //balik kanan
       // Mydiv.style.transform = "translateX("+ decrease + "rem)" //translate dia kekanan
        //Mydiv.style.transform = "translateY("+ decrease + "rem)" //translate dia kebawah
        /*
        Mydiv.style.left = x + "px";
        Mydiv.style.top = y + "px";
        Mydiv.style.transform = "rotateZ("+ decrease + "deg)" membuat div muter muter serong ke bawah
        */


       }
    }
}

