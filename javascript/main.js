/*
let nama = 'krishna'
let usia = 15
let Tinggi = 173.4
let pacar = 1
let berat

berat = 62

// if(pacar == null){
// pacar = 'belum punya'
// }else{
//  pacar = 'udah punya'
// }

switch(pacar){
    case 1:
        pacar = 'cuma satu udah cukup'
    break
    case 2:
        pacar = 'ada dua saya cukup playboy'
    break
    default:
        pacar = 'rahasia dong'
        break
}

alert(`nama saya ${nama} usia saya ${usia} tinggi saya ${Tinggi} cm pacar saya ${pacar} berat saya ${berat} kg`)
*/


let grade = 59

switch (true) {
    case grade >= 90:
        alert("excelent")
        break
        case grade >= 80:
        alert("Great job")
        break
        case grade >= 70:
        alert("Good")
        break
        case grade >= 65:
        alert("keep learning")
        break
        case grade >= 60:
        alert("so bad take your full time for learning")
        break
        case grade > 60:
        alert("realy bad you must privat coursus,and take your full time for learning")
    default:
       grade = "data failed"
        break
}

alert(grade)