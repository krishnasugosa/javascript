let canvas = document.getElementById("Mycanvas")
let context = canvas.getContext("2d")
console.log(context.lineWidth)
//draw line
/*
context.beginPath();
context.fillStyle = "yellow"
context.lineWidth = 8
context.moveTo(0,0)
context.lineTo(250,250);
context.lineTo(250,500)
context.moveTo(500,0)
context.lineTo(250,250)
context.fill()
context.stroke()*/


//text section
/*
context.font = "24px consolas"
context.fillStyle = "gray"
context.fillText("hello world!" , 100,100)*/

//draw kotak
/*
context.fillStyle = 'red'; // Warna isi
context.fillRect(50, 50, 100, 100); // Kotak berukuran 100x100, mulai dari koordinat (50, 50)*/

//draw circle
/*
context.beginPath();
context.arc(150, 150, 50, 0, 2 * Math.PI); // Lingkaran dengan pusat (150, 150) dan jari-jari 50
context.fillStyle = 'blue'; // Warna isi
context.fill();*/

// draw line again
context.beginPath();
context.moveTo(50, 50); // Mulai dari titik (50, 50)
context.lineTo(150, 150); // Garis ke titik (150, 150)
context.strokeStyle = 'green'; // Warna garis
context.lineWidth = 3; // Ketebalan garis
context.stroke();