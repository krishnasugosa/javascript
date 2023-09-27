fetch("coba.json")
.then(response => response.json())
.then(data => showInfo(data))

function showInfo(data){
  console.table(data.countries)
}


const negara = [
  {
    name:"indonesia",
    capital:"jakarta"
  },
  {
    name:"singapore",
    capital:"singapore"
  }

]
console.table(negara)

//try destrucing object
const wilayah = {
  country1 : {name:"indonesia",coordinat:4601},
  country2 : {name:"china",coordinat:4901},
}

const find = () => {
  let {country1,country2} = wilayah
  console.log(country1)
  console.log(country2)
 
}
find()
//try destrucing array
const wilayah2 = [
  japan = "tokyo",
  usa = "new york"
]

const find2 = () => {
  let[japan,usa] = wilayah2
  console.log(japan)
  console.log(usa)
}
find2()

/*
function sisi(s){
  if(typeof ''){
  return "pls enter the number"
  }else{
   return s * s
  }
}

console.log(sisi(5))*/
//celcius to farent
function celciusToFaret(celcius){
let fahrent = (celcius * 9/5) + 32;
return fahrent
}
// fahrent to celcius
function farentToCelcius(fahrent){
  let celcius = (fahrent - 32) * 5/9;
  return celcius
}

console.log(celciusToFaret(40))
console.log(farentToCelcius(104))

//array with function
function abc(e,f,g){
  return [e,f,g]
}

console.log(abc('A','B','C'))


// Math pow simple
const increased = (value) => value**2
console.log(increased(3))


//try destrucing
const user = {
  name:"patrick",
  age:100,
  status:"online"
}

const{name,age,status} = user
console.log(user.name)
console.log(user.age)
console.log(user.status)


//mengilangkan duplicate duplicate numbers
const ray = [1,2,2,1,3,4,4,5,5,6]
const cari = [...new Set(ray)]
console.log(cari)