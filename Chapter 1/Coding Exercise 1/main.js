window.onload = function() 
{
    document.getElementById("consoleButton").addEventListener("click", firstResponse);
    document.getElementById("browserButton").addEventListener("click", secondResponse);
    document.getElementById("alertButton").addEventListener("click", thirdResponse);
    document.getElementById("innerHTMLButton").addEventListener("click", forthResponse);
};

function firstResponse(e) {
    console.log("Thanks for clicking the console button!")
}

function secondResponse(e) {
    document.write("Thanks for clicking the browser button!")
}

function thirdResponse(e) {
    alert("Thanks for clicking the alert button!")
}

function forthResponse(e) {
    document.getElementById("heading").innerHTML += "<h2>Hey you clicked the Button!<h2>"
}