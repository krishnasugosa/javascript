let username;
document.getElementById("MYbutton").onclick = function(){
    username = document.getElementById("MYtext").value;
    console.log(username)
    document.getElementById("MYlabel").innerHTML = "hello " + username;
}