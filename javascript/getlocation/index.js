const getLocation = () => {
     if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success,error)
     }
}

function success(position){
    console.log(position)
}

function error(){
    console.error("sorry")
}

getLocation();