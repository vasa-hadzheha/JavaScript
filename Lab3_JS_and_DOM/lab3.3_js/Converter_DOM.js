var o=function Inch(){
    var x = prompt("Input inches:")
    var b= parseFloat(x)*2.54;
    document.write(b+"sm") 
}
let myElm = document.createElement("h1"); 
document.body.appendChild(myElm);
myElm.innerHTML = "Create btn Converter"; 

let btn = document.createElement("button");
btn.innerHTML = "Inches";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);
btn.onclick=o;