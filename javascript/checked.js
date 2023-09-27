document.getElementById("Btn").onclick = function () {
    const Check = document.getElementById("check");
    const Bri = document.getElementById("Bri");
    const dana = document.getElementById("dana");
    const bca = document.getElementById("Bca");
    if (Check.checked) {
        console.log("you are subscribe")
    } else {
        console.log("you are not subscribe")
    }

    if (Bri.checked) {
        console.log("you paying using BRI")
    }

    else if (dana.checked) {
        console.log("you paying using DANA")
    }

    else if (bca.checked) {
        console.log("you paying using BCA")
    }
    else {
        console.log("you must pay with that 3 category of digital paymen")
    }


}