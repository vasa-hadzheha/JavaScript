function timeUp(){
    alert("Time is up!")
}
var id = setTimeout(timeUp,4000);

//print id of setTimeout on web page on h1
let myElm = document.createElement("h1"); 
document.body.appendChild(myElm);
myElm.innerHTML = id; 
clearTimeout(id);

// print counter in <p>
var counter = 1;
let sentece = document.createElement("p");
document.body.appendChild(sentece);
function printMessage(){
    sentece.innerHTML+= counter+"<br/>";
    counter++;
}
//do func every 500 miliseconds
var intervalId = setInterval(printMessage,500);

function sl (){
    clearInterval(intervalId)
}

//stop func printMessage after 10 seconds
setTimeout(sl,10000);
