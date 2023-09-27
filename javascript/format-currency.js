let Num = 100;

//Num = Num.toLocaleString("en-US") //us english
//Num = Num.toLocaleString("hi-IN") //hindi
//Num = Num.toLocaleString("de-DE") //german

//Num = Num.toLocaleString("en-US", {style: "currency", currency: "USD"}) //USD
//Num = Num.toLocaleString("hi-IN", {style: "currency", currency: "INR"}) //INR
//Num = Num.toLocaleString("de-DE", {style: "currency", currency: "EUR"}) //EUR

//Num = Num.toLocaleString(undefined, {style: "percent"}) //persen

Num = Num.toLocaleString(undefined, {style: "unit", unit: "kilogram"})  //celsius , //kilometer ,  //kilogram
console.log(Num)

let sum = 1231674.43567;
console.log(new Intl.NumberFormat('de-De',{style: 'currency',currency:'EUR'}).format(sum))//menjadi euro
console.log(new Intl.NumberFormat('jp-JP',{style: 'currency',currency:'JPY'}).format(sum))//menjadi euro
//maksimal 3 singnifikat digit
console.log(new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(sum))